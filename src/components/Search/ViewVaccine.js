import { Box } from '@mui/material'
import React from 'react'
import { Input } from 'semantic-ui-react'

export default function ViewVaccine(value) {
  if (value.value === '') {
    return null
  } else if (!IsJsonString(value.value)) {
    return (
      <Input
        fluid
        label={{ basic: true, content: 'Infor' }}
        labelPosition="left"
        value="No information to show"
      ></Input>
    )
    // {JSON.stringify(value.value) }
  } else if (JSON.parse(value.value).vacId == null) {
    return (
      <Input
        fluid
        label={{ basic: true, content: ' IDs list' }}
        labelPosition="left"
        value={value.value}
      ></Input>
    )
  }
  return (
    <Box sx={{ px: '13rem' }}>
      <Input
        fluid
        className="input-info-vaccine"
        label={{ content: 'Vaccine ID' }}
        labelPosition="left"
        value={hex_to_ascii(JSON.parse(value.value).vacId)}
      ></Input>
      <Input
        fluid
        className="input-info-vaccine"
        label={{ content: 'manufactureId ID' }}
        labelPosition="left"
        value={JSON.parse(value.value).manufactureId}
      ></Input>
      <Input
        fluid
        className="input-info-vaccine"
        label={{ content: 'owner ID' }}
        labelPosition="left"
        value={JSON.parse(value.value).ownerId}
      ></Input>
      <Input
        fluid
        className="input-info-vaccine"
        label={{ content: 'VAO ID List' }}
        labelPosition="left"
        value={JSON.parse(value.value).vaoList}
      ></Input>
      <Input
        fluid
        className="input-info-vaccine"
        label={{ content: 'Vac Type' }}
        labelPosition="left"
        value={JSON.parse(value.value).vacTypeId}
      ></Input>
      <Input
        fluid
        className="input-info-vaccine"
        label={{ content: 'Max Inoculations Number' }}
        labelPosition="left"
        value={JSON.parse(value.value).maxInoculationsNumber}
      ></Input>
      <Input
        fluid
        className="input-info-vaccine"
        label={{ content: 'Inoculation Count' }}
        labelPosition="left"
        value={JSON.parse(value.value).inoculationCount}
      ></Input>
    </Box>
  )
}
function IsJsonString(str) {
  try {
    JSON.parse(str)
  } catch (e) {
    return false
  }
  return true
}

function hex_to_ascii(str1) {
  var hex = str1.toString()
  var str = ''
  for (var n = 0; n < hex.length; n += 2) {
    str += String.fromCharCode(parseInt(hex.substr(n, 2), 16))
  }
  return str
}
