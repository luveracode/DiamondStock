# Django Imports
from django import template
from django.contrib.auth.models import User, Group
from django.conf import settings
from django.core.mail import EmailMessage
from django.urls import reverse
from django.contrib.sites.shortcuts import get_current_site
from django.template.loader import render_to_string
from email.utils import make_msgid
from datetime import date, timedelta, datetime
from django.db.models import Avg, Count, Min, Sum, FloatField, IntegerField, Value as V
from django.db.models.functions import Cast, Concat, Round
from django.contrib.humanize.templatetags.humanize import intcomma
from django.db.models import Q, Count, F, Func, Value, CharField, DateField
from django.utils.dateparse import parse_datetime

# Other Standard Library Imports
import os
import traceback
import threading
import logging


# Django Template Library
register = template.Library()

@register.filter(name='has_group')
def has_group(user, group_name):
    g_l=group_name.split(',')
    g_l=[x.strip() for x in g_l]
    return user.groups.filter(name__in=g_l).exists()

@register.simple_tag
def get_claim(data):
    #print(data,'data')
    list = []
    for i in data:
        list.append(i['claim_status'])
        
    claims=(', ').join(list)
    return claims

@register.simple_tag
def convert_to_yyyy_mm_dd(date_str):
    try:
        date_str = str(date_str)
        #print(f"Original date string: {date_str}")
        date_obj = datetime.strptime(date_str, '%m-%d-%Y')
        # Format the date as 'yyyy-mm-dd'
        formatted_date = date_obj.strftime('%Y-%m-%d')
        #print(f"Formatted date string: {formatted_date}")  
        return formatted_date[:10]
        
    except ValueError:
        #print(f"Warning: Unable to parse date string '{date_str}'. Returning original value.")
        return date_str[:10]
    
def get_approved_at(date_time):
    try:
        if date_time:
            if isinstance(date_time, datetime):
                approved_at = date_time.strftime("%Y-%m-%d %H:%M:%S")
            else:
                timestamp_obj = datetime.strptime(date_time, "%Y-%m-%d %H:%M:%S.%f")
                approved_at = timestamp_obj.strftime("%Y-%m-%d %H:%M:%S")

            return approved_at
        else:
            return "-"
    except Exception as e:
        #print(f"Error: {e}")
        return "-"

@register.simple_tag
def Current_quarter(monthAsInt=int(date.today().strftime("%m"))):
    today = date.today()
    if monthAsInt==1:
        quarter="Q1'"+str(today.strftime("%y"))
        return quarter
    if monthAsInt<=4 and  monthAsInt>1:
        quarter="Q2'"+today.strftime("%y")
        return quarter
    elif monthAsInt<=7 and monthAsInt>=5 :
        quarter="Q3'"+today.strftime("%y")
        return quarter
    elif monthAsInt<=10 and monthAsInt>=8 :
        quarter="Q4'"+today.strftime("%y")
        return quarter
    elif monthAsInt<=12 and monthAsInt>=11 :
        quarter="Q1'"+str(int(today.strftime("%y"))+1)
        return quarter
    else:
        raise ValueError('The Month is Incorrect')

@register.simple_tag
def dashboard_qtr(q=4,s=Current_quarter(),this_quarter=False,prefix='',suffix=''):
    year=int(s[3:])
    Q=int(s[1:2])
    quarter=[]
    for x in range(q):
        Q=4 if Q<2 else Q-1
        year=year-1 if Q==4 else year
        quarter.append(f'''{prefix}Q{Q}'{year}{suffix}''')
    if this_quarter:
        quarter.insert(0,f'''{prefix}{s}{suffix}''')
    return quarter


@register.simple_tag
def get_budget_code(product_group):
    budget_codes = {
        'Optical and Photonics': 3936,
        'RSP': 3177,
        'Carrier Platform Operations': ['3210', '3949'],
        'OEM': 0,
        'VI Scrap/ Deval': 3950,
        'Rework/ Scrap': 3935
    }
    return budget_codes.get(product_group, ['0'])

@register.filter
def is_list(value):
    return isinstance(value, list)
    
@register.simple_tag()
def get_fullname(user):
    if User.objects.filter(username = user).exists():
        i = User.objects.annotate(full_name=Concat('first_name', V(' '), 'last_name')).filter(username=user).order_by('id')[:1].get()
        return i.full_name
    else:
        i= "-"
        return i

@register.filter
def format_datetime(value):
    if isinstance(value, str):
        try:
            # Parse the ISO 8601 string into a datetime object
            dt_object = datetime.fromisoformat(value.replace('Z', '+00:00'))
            # Format the datetime object to include only the date
            return dt_object.strftime('%Y-%m-%d')
        except ValueError:
            return value  # Return the original string if parsing fails
    elif isinstance(value, datetime):
        # If it's already a datetime object, format it directly
        return value.strftime('%Y-%m-%d')
    return value

@register.simple_tag()
def get_username(user):
    if User.objects.annotate(full_name=Concat('first_name', V(' '), 'last_name')).filter(full_name__icontains=user).exists():
        i = User.objects.annotate(full_name=Concat('first_name', V(' '), 'last_name')).filter(full_name__icontains=user).order_by('id')[:1].get()
        return i.username
    else:
        i= "User Not Defined"
        return i

@register.simple_tag()
def get_username_byemail(email):
    if User.objects.filter(email=email).exists():
        i = User.objects.filter(email=email).order_by('id')[:1].get()
        return i.username
    else:
        i= "User Not Defined"
        return i

@register.simple_tag()
def get_current_quarter(current_date=None):
    if current_date is None:
        current_date = datetime.now()
        
    currmonth = current_date.month
    currdate = date.today()
    getyear = str(currdate.year)
    year = str(getyear)[2:]

    if currmonth == 11 or currmonth == 12 or currmonth == 1:
        currentQtr = 'Q1'
        curryear = str(int(year) + 1) if currmonth != 1 else year
    elif 2 <= currmonth <= 4:
        currentQtr = 'Q2'
        curryear = year
    elif 5 <= currmonth <= 7:
        currentQtr = 'Q3'
        curryear = year
    elif 8 <= currmonth <= 10:
        currentQtr = 'Q4'
        curryear = year
    else:
        raise ValueError('Invalid Month')

    currqtr = f"{currentQtr}'{curryear}"
    return currqtr

@register.simple_tag()
def get_previous_quarter():
    # Calculate previous quarter by subtracting 3 months from the current date
    current_date = datetime.now()
    prev_date = current_date - timedelta(days=90)
    prev_month = prev_date.month

    if 2 <= prev_month <= 4:
        prevQtr = 'Q2'
        curryear = str(prev_date.year)[2:]
    elif 5 <= prev_month <= 7:
        curryear = str(prev_date.year)[2:]
        prevQtr = 'Q3'
    elif 8 <= prev_month <= 10:
        prevQtr = 'Q4'
        curryear = str(prev_date.year)[2:]
    else:  # Months 11, 12, and 1
        prevQtr = 'Q1'
        curryear = str(prev_date.year)[2:]
        
    prevqtr = f"{prevQtr}'{curryear}"

    return prevqtr

@register.simple_tag
def dashboard_qtr(q=4,s=Current_quarter(),this_quarter=False,prefix='',suffix=''):
    year=int(s[3:])
    Q=int(s[1:2])
    quarter=[]
    for x in range(q):
        Q=4 if Q<2 else Q-1
        year=year-1 if Q==4 else year
        quarter.append(f'''{prefix}Q{Q}'{year}{suffix}''')
    if this_quarter:
        quarter.insert(0,f'''{prefix}{s}{suffix}''')
    return quarter

@register.simple_tag()
def get_email(user):
    if User.objects.filter(username = user).exists():
        user_email = User.objects.filter(username = user)[:1].get()
        return user_email.email
    else:
        i= None
        return i

@register.simple_tag()
def user_first_last_name(email):
    if User.objects.annotate(full_name=Concat('first_name', V(' '), 'last_name')).filter(email = email).exists():
        i = User.objects.filter(email = email).annotate(full_name=Concat('first_name', V(' '), 'last_name')).order_by('id')[:1].get()
        return i.full_name
    else:
        i= "User"
        return i

@register.simple_tag()
def names_of_users(Team=None):
    data= User.objects.filter(groups__name=Team).exclude(groups__name='NPI Planner').exclude(groups__name='NPI & Planner')
    npi_planner= User.objects.filter(groups__name='NPI & Planner')
    data = data|npi_planner

    names=[[f"{x.first_name} {x.last_name}",x.username]for x in data]
    return names

@register.simple_tag()
def names_of_other_exp_users(Team=None):
    data= User.objects.filter(groups__name=Team)
    data = data

    names=[[f"{x.first_name} {x.last_name}",x.username]for x in data]
    return names

@register.simple_tag()
def get_user_list():
    user_list = User.objects.all()
    return user_list

@register.simple_tag
def get_userid_list():
    userid_list = User.objects.values_list('id', flat=True)
    return list(userid_list)

@register.simple_tag()
def names_of_npi_users(Team=None):
    if Team == 'PlanningManager':
        data= User.objects.filter(Q(groups__name=Team) & Q(groups__name='NPI Planner'))
    else:
        data= User.objects.filter(groups__name=Team)
    
    npi_planner= User.objects.filter(groups__name='NPI & Planner')
    data = data|npi_planner

    names=[[f"{x.first_name} {x.last_name}",x.username]for x in data]
    return names

@register.simple_tag()
def get_approver_list(UserName):
    user = User.objects.get(username=UserName)
    group_names = list(user.groups.values_list('name', flat=True))

    # Initialize a list for dropdown options
    dropdown_options = []

    for current_group in group_names:
        if current_group == 'Planner':
            data = User.objects.filter(groups__name='Planner').values('username', 'first_name', 'last_name')
        elif current_group == 'PlanningManager':
            data = User.objects.filter(groups__name='PlanningManager').values('username', 'first_name', 'last_name')
        elif current_group == 'PlanningDirector':
            data = User.objects.filter(groups__name='PlanningDirector').values('username', 'first_name', 'last_name')
        elif current_group == 'ProductGroupLeader':
            data = User.objects.filter(groups__name='ProductGroupLeader').values('username', 'first_name', 'last_name')
        elif current_group == 'SuperAdmin' or current_group == 'CienaAdmin':
            data = User.objects.values('username', 'first_name', 'last_name')
        else:
            data = User.objects.values('username', 'first_name', 'last_name')

        # Add options to the dropdown list
        for item in data:
            username = item['username']
            full_name = f"{item['first_name']} {item['last_name']}"
            dropdown_options.append((username, full_name))

    return dropdown_options

def currency(dollars):
    dollars = round(float(dollars), 2)
    return "$%s%s" % (intcomma(int(dollars)), ("%0.2f" % dollars)[-3:])
