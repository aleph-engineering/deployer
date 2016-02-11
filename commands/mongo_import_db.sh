#!/bin/bash
ENTITIES="BasicProfileEntity GitHubRepositoryEntity GitHubUserEntity HiredEntity UserEntity UserProviderEntity"
DB_NAME_TEST="inCubator"
DUMP_FOLDER="commands/dumps/"
GIT_REMOTE_NAME="dumps"

function import_database(){
	for entity in ${ENTITIES} ; do
		mongoimport --db ${DB_NAME} --drop --upsert --collection ${entity} < ${DUMP_FOLDER}${entity}.json
	done
}
function pull_new_dumps(){
    git pull -f ${GIT_REMOTE_NAME} master
}
cd ${DUMP_FOLDER} && pull_new_dumps && cd ../..
import_database
