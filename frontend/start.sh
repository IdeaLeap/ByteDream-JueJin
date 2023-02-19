cd /opt/bytedream;
sudo yarn build;
cd /opt/bytedream/.output/server;
sudo npm i node-fetch-native;
sudo PORT=8885 node index.mjs;