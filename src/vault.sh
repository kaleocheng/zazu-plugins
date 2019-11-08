#!/usr/bin/env bash
project=$1
env=$2
project_path="$HOME/Wiredcraft/${project}-devops/devops/ansible"

cd "$project_path" || exit
ANSIBLE_VAULT_PASSWORD_FILE=.vault_password "$HOME/Envs/python3/bin/ansible-vault" decrypt "group_vars/all-${env}/vault" --output -
