
# reverse-word-service

reverse-word-service is a Node + Express backend service to reverse texts and identify if the text ais a palindrome.  

## Building and running on localhost 

First install dependencies:  

```sh

npm install

```
  

To run tests:  

```sh

npm test

```
  

To run in localhost  

```sh

npm start

```


# REST API

The REST API to the example app is described below.

## Get reverse text

### Request

`GET /iecho?text=:text`

    curl -i -H 'Accept: application/json' http://localhost:6202/iecho?text=Retry

### Response

	HTTP/1.1 200 OK
    X-Powered-By: Express
	Access-Control-Allow-Origin: *
	Content-Type: application/json; charset=utf-8
	Content-Length: 35
	ETag: W/"23-KYVPlHtZ53iS6hslNjPISD8Vir4"
	Date: Wed, 17 Mar 2021 16:19:56 GMT
	Connection: keep-alive

	{"text":"yrteR","palindrome":false}

## Get reverse palindrome text

### Request

`GET /iecho?text=:text`

    curl -i -H 'Accept: application/json' http://localhost:6202/iecho?text=Madam

### Response

	HTTP/1.1 200 OK
	X-Powered-By: Express
	Access-Control-Allow-Origin: *
	Content-Type: application/json; charset=utf-8
	Content-Length: 34
	ETag: W/"22-Ee237e307md/WH/ni3jEooAByO4"
	Date: Wed, 17 Mar 2021 16:32:45 GMT
	Connection: keep-alive

	{"text":"madaM","palindrome":true}
