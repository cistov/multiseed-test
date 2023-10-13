#!/bin/bash
source /home/{{appName}}/.bashrc
systemctl start postgresql-14
su -c "source /home/{{appName}}/.bashrc ; cd /home/{{appName}}/run/site-specific/data ; yes | JvmRun global.genesis.environment.scripts.SendTable -a" - "{{appName}}"
echo "data loaded"