#!/usr/bin/env bash
project=$1
env=$2
project_path="$HOME/Wiredcraft/${project}-devops/devops/ansible"
vault_file="group_vars/all-${env}/vault"
pyenv="$HOME/Envs/python3/bin/"

if [ ! -f "$project_path/$vault_file" ]; then
   vault_file="${vault_file}.yml"
fi

cd "$project_path" || exit
ANSIBLE_VAULT_PASSWORD_FILE=.vault_password "$pyenv/ansible-vault" decrypt "$vault_file" --output -
