const fs = require('fs');

const data = JSON.parse(fs.readFileSync('sandbox-AgendaShiftdata.json', 'utf8'));

const items = data.Items.map(item => ({
  PutRequest: {
    Item: item
  }
}));

const output = {
  "AgendaShift-5s5tsx432ja3vfu6vsvk6xipdu-NONE": items
};

fs.writeFileSync('sandbox-AgendaShift-batch.json', JSON.stringify(output, null, 2));
console.log('Fichier transformé prêt pour batch-write-item');

// aws dynamodb scan \
//   --table-name AgendaShift-vchnedpkxrd6jmrsdikyk6vebi-NONE \
//   --profile 4nkhSchedulum > sandbox-AgendaShiftdata.json
//
// restore:
//
// aws dynamodb batch-write-item --request-items file://sandbox-AgendaUserdata-batch.json  --profile 4nkhSchedulumDev

// aws dynamodb batch-write-item --request-items file://sandbox-AgendaShift-batch.json --region VOTRE_REGION_AWS
// aws dynamodb batch-write-item --request-items file://sandbox-AgendaShift-batch.json --region us-east-1

