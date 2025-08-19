BACK TABLE GRAPHQL DYNAMODB AWS -> 

aws dynamodb scan \
  --table-name AgendaUser-vchnedpkxrd6jmrsdikyk6vebi-NONE \
  --profile 4nkhSchedulum > sandbox-AgendaUserdata.json

aws dynamodb scan \
  --table-name AgendaShift-vchnedpkxrd6jmrsdikyk6vebi-NONE \
  --profile 4nkhSchedulum > sandbox-AgendaShiftdata.json


use node script:
node tramsformBatch.js
----------------------------

use python script build_user.ipynb to create 25 users

restore ou create:

aws dynamodb batch-write-item --request-items file://Data/sandbox-AgendaUser-batch.json  --profile 4nkhSchedulum

// aws dynamodb batch-write-item --request-items file://sandbox-AgendaUserdata.json  --profile 4nkhSchedulumDev

// aws dynamodb batch-write-item --request-items file://sandbox-AgendaShift-batch.json --region VOTRE_REGION_AWS
// aws dynamodb batch-write-item --request-items file://sandbox-AgendaShift-batch.json --region us-east-1
