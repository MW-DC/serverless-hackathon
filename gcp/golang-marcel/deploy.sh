#!/usr/bin/env bash

gcloud functions deploy HelloHTTPGo --runtime go113 --trigger-http --allow-unauthenticated --region europe-central2
