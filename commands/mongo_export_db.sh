#!/bin/bash
ENTITIES="BasicProfileEntity GitHubRepositoryEntity GitHubUserEntity HiredEntity UserEntity UserProviderEntity"
DB_NAME="inCubator"
PRJECT_PATH="/home/Development/Projects/incubator_db_seed"
DUMP_FOLDER="dumps/"

function exportDatabase(){
	for entity in ${ENTITIES} ; do
		mongoexport --db ${DB_NAME} --collection ${entity} -o ${DUMP_FOLDER}${entity}.json
	done
}
exportDatabase