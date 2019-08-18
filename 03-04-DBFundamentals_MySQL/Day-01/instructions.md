# In the Name of ALLAH

## To install MySQL Server

`$ sudo apt update`
`$ sudo apt install mysql-server`


- To check installation `mysql`
  - `SHOW DATABASES;`
- Reference <https://www.digitalocean.com/community/tutorials/how-to-install-mysql-on-ubuntu-18-04>
- Avoid Secure Installation now

## To install MySQL Workbench

- Download the required package from <https://dev.mysql.com/downloads/workbench/>

- To enable `root` login to MySQL Workbench

  - `sudo mysql -u root`
  - `ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '<password>';`

## To install PhpMyAdmin

- Apache
- PHP (with modules)
- PhpMyAdmin
- Configuration

### Apache

`$ sudo apt install apache2`

### PHP

`$ sudo apt-get install php libapache2-mod-php php-mysql`

### PhpMyAdmin

`$ apt install phpmyadmin php-mbstring php-gettext`
`$ phpenmod mbstring`

### Configuration

`$ vim /etc/apache2/apache2.conf`

Include the following line at the end of the file
`Include /etc/phpmyadmin/apache.conf`

`$ sudo systemctl restart apache2`

### Finally

Open Web browser:

- <http://localhost>
- <http://localhost/phpmyadmin>


- References

  - <https://www.digitalocean.com/community/tutorials/how-to-install-and-secure-phpmyadmin-on-ubuntu-18-04>
  - <https://www.liquidweb.com/kb/install-phpmyadmin-ubuntu-18-04/>
  - <https://phoenixnap.com/kb/how-to-install-lamp-stack-on-ubuntu>
