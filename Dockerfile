FROM ubuntu:latest
RUN git clone https://github.com/Walukapah/WABOT.git /root/WABOT/
WORKDIR /root/WABOT/
RUN npm install 
# yarn install
CMD ["npm", "start"]
