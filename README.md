# Carolina SPA

App for managing appointments 

## Installation

After download this project please proceed to install [docker](https://docs.docker.com/get-docker/) (if you don't have it) in order to run a mysql instance locally.

Once the installation is completed go to the root of the project and run docker-compose as follow :

```bash
docker-compose up -d
```

Warning : If you are using a linux's distro or macOS sytem, maybe you will require install docker-compose separetelly. If that is the case follow one of this instructions : 

1 - https://www.digitalocean.com/community/tutorials/como-instalar-docker-compose-en-ubuntu-18-04-es

2 - https://docs.docker.com/engine/install/ubuntu/


## Usage

when the instance is up, run the following command to install all necessary dependencies.

```bash
npm install 
```

If you need access to the instance you can run the following command on your terminal :

```bash
docker exec -it carolina-project_db_1 bash
```

Ensure to perform a login to the database with valid credentials :

```bash
mysql -uroot -ptoor
```


## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)