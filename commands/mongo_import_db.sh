#!/bin/bash
ENTITIES="BasicProfileEntity GitHubRepositoryEntity GitHubUserEntity HiredEntity UserEntity UserProviderEntity"
DB_NAME_TEST="inCubator"
DUMP_FOLDER="/opt/incubator.dumps/"
GIT_REMOTE_NAME="https://github.com/refucktor/incubator.dumps.git"

function import_database(){
	for entity in ${ENTITIES} ; do
		mongoimport --db ${DB_NAME} --drop --upsert --collection ${entity} < ${DUMP_FOLDER}${entity}.json
	done
}
function pull_new_dumps(){
    git pull -f ${GIT_REMOTE_NAME} master
}
cd ${DUMP_FOLDER} && pull_new_dumps
import_database
