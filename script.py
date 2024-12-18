import os
os.chdir('/home/ubuntu/DiamondStock')
os.system("git reset --hard")
os.system("git pull")
os.system ('sudo chown :www-data ~/DiamondStock/')
os.system('sudo chmod 777 -R  ~/DiamondStock/')
os.system ('sudo systemctl restart apache2')
os.system ('cat /etc/apache2/envvars')