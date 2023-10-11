FROM python:3.8-slim

WORKDIR /app

COPY . /app

RUN pip install --trusted-host pypi.python.org -r my-lambda-function/requirements.txt

EXPOSE 3000

ENV NAME World

CMD ["sam", "local", "start-api"]