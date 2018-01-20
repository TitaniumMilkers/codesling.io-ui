const envBuild = {
  'server': [
    'PORT=1337'
  ],
  'client': [
    'NODE_ENV=DEVELOPMENT',
    'DEBUG=TRUE',
    'ENVPREFIX=REACT_APP_',
    'REST_SERVER_URL=http://ec2-13-56-228-82.us-west-1.compute.amazonaws.com:4990',
    'SOCKET_SERVER_URL=http://ec2-13-56-228-82.us-west-1.compute.amazonaws.com:4155',
    'CODERUNNER_SERVICE_URL=http://ec2-13-56-228-82.us-west-1.compute.amazonaws.com:4000',
    'REACT_APP_SOCKET_SERVER_URL=http://ec2-13-56-228-82.us-west-1.compute.amazonaws.com:4155',
    'REACT_APP_REST_SERVER_URL=http://ec2-13-56-228-82.us-west-1.compute.amazonaws.com:4990'
  ]
};

module.exports = envBuild;
