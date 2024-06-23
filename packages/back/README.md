# back

To run this starting toolkit, you should make .env files on src/configs

.dev.env  ==> development env 
.prod.env ==> production env
.test.env ==> test env

To configure these files, consider .example.dev. The format should be the same

Troubleshooting Guide

1) Error: listen EADDRINUSE: address already in use::PORT

1. Run "lsof -i :{PORT}" ex) "lsof -i :8080"
2. You will see
COMMAND   PID USER   FD   TYPE DEVICE SIZE/OFF NODE NAME
node    47820   ws   18u  IPv6 847522      0t0  TCP *:http-alt (LISTEN)
The result will not be exactly same, but what you have to see is PID. That process is holding that port.
3. use "kill -9 {PID}" ex) "kill -9 47820"