#!/bin/bash
ENTITIES="BasicProfileEntity GitHubRepositoryEntity GitHubUserEntity HiredEntity UserEntity UserProviderEntity"
DB_NAME="inCubator"
PRJECT_PATH="/home/Development/Projects/incubator_db_seed"
DUMP_FOLDER="commands/dumps/"

function import_database(){
	for entity in ${ENTITIES} ; do
		mongoimport --db ${DB_NAME} --collection ${entity} --file ${DUMP_FOLDER}${entity}.json
	done
}
import_database
