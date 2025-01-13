FROM quay.io/lyfe00011/md:beta
RUN git clone https://github.com/Walukapah/WABOT.git /root/SRIBOT/
WORKDIR /root/SRIBOT/
RUN yarn install
CMD ["npm", "start"]
