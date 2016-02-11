#!/bin/bash

# -----------------Configurable Section------------------------------


GIT_REPOSITORY_URL="ssh://zero@zero/var/lib/public/incubator"
PROJECT_NAME="incubator"
PROJECT_LOCATION="/opt/new_incubator"
REMOTE_NAME="origin"
BRANCH_NAME="refactoring"

cd $PROJECT_LOCATION
git pull $REMOTE_NAME $BRANCH_NAME
git checkout $BRANCH_NAME

mvn clean install
cd incubator.web

pkill --full maven

mvn clean package tomcat7:run-war-only
