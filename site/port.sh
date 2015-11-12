#!/bin/sh

########################################################
# Forwards all incoming requests on port 80 to port 8080
########################################################

sudo iptables -t nat -A PREROUTING -i eth0 -p tcp --dport 80 -j REDIRECT --to-port 8080
