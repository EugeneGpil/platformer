apt-get update &&\
apt-get install nano -y &&\
mkdir /var/www &&\
touch /var/www/.barshrc &&\
echo "umask 012\n" >> /var/www/.bashrc
