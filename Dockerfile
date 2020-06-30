# base image
FROM node:11

# COPY . /app/

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install and cache app dependencies using yarn
# RUN npm i

# Copy all frontend stuff to new "app" folder

# CMD ["./run.sh"]

# EXPOSE 8000