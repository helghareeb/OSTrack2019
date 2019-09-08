# بسم الله الرحمن الرحيم

[TOC]

## Start, Stop, Restart Services in Ubuntu

### List All Services

`$ service --status-all`

### Use Systemd to Start/Stop/Restart Services in Ubuntu

Syntax is `sudo systemctl [action] [service name]`

To Stop ufw service `$ sudo systemctl stop ufw`

To Start ufw service `$ sudo systemctl start ufw`

To Restart ufw service `$ sudo systemctl restart ufw`

To Check the status of ufw service `$ sudo systemctl status ufw`

### Start/Stop/Restart Services with service command on Ubuntu

To Stop ufw service `$ sudo service ufw stop`

To Start ufw service `$ sudo service ufw start`

To Restart ufw service `$ sudo service ufw restart`

To Check the status of ufw service `$ sudo service ufw status`