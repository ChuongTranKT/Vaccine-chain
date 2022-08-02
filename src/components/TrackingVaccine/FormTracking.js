import { Box, Typography, Stack } from '@mui/material'
import React from 'react'
import { Table, Input } from 'semantic-ui-react'

export default function FormTrackingVaccine(value) {
  // console.log('vacId ne', JSON.parse(value.value))
  if (value.value === '') {
    return null
  } else if (!IsJsonString(value.value)) {
    return (
      <Input
        fluid
        label={{ basic: true, content: 'Information' }}
        labelPosition="left"
        value="No information to show"
      ></Input>
    )
  } else if (JSON.parse(value.value).length === 0) {
    return (
      <Input
        fluid
        label={{ basic: true, content: 'Information' }}
        labelPosition="left"
        value="No information to show"
      ></Input>
    )
  }

  const handleClick = e => {
    alert('ad')
  }
  return (
    <Stack sx={{ mt: '5rem' }} spacing={5}>
      <Stack>
        <Box
          sx={{
            py: 2,
            borderRadius: '2rem',
          }}
        >
          <Typography
            variant="content"
            sx={{ fontSize: '2.4rem', fontWeight: 500, p: 2 }}
          >
            Detail Delivery Status
          </Typography>
        </Box>
        <Stack>
          <Table celled style={{ marginTop: '1rem' }}>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Vac ID</Table.HeaderCell>
                <Table.HeaderCell>Current Status</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              <Table.Row>
                <Table.Cell>haha</Table.Cell>
                {/* { if (JSON.parse(value.value).length === 0)
                    return (
                      <Table.Cell>{JSON.parse(value.value).status}</Table.Cell>
                    )
                  else
                    return (
                      <Table.Cell>
                        {
                          JSON.parse(value.value)[
                            JSON.parse(value.value).length - 1
                          ].status
                        }
                      </Table.Cell>
                    )} */}
                {/* {JSON.parse(value.value)[JSON.parse(value.value).length - 1]
                  .status > 0 ? ( */}
                <Table.Cell>
                  {
                    JSON.parse(value.value)[JSON.parse(value.value).length - 1]
                      .status
                  }
                </Table.Cell>
                {/* ) : (
                  <Table.Cell>{JSON.parse(value.value).status}</Table.Cell>
                )} */}
              </Table.Row>
            </Table.Body>
          </Table>
        </Stack>
      </Stack>
      <Stack>
        <Stack>
          <Box
            sx={{
              py: 2,
              borderRadius: '2rem',
            }}
          >
            <Typography
              variant="content"
              sx={{ fontSize: '2.4rem', fontWeight: 500, p: 2 }}
            >
              History Information
            </Typography>
          </Box>
        </Stack>
        <Table celled style={{ marginTop: '1rem' }}>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Time</Table.HeaderCell>
              <Table.HeaderCell>Status</Table.HeaderCell>
              <Table.HeaderCell>From</Table.HeaderCell>
              <Table.HeaderCell>To</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {JSON.parse(value.value)
              .reverse()
              .map((vaccine, index) => (
                <Table.Row key={index}>
                  <Table.Cell>
                    {new Intl.DateTimeFormat('en-US', {
                      year: 'numeric',
                      month: '2-digit',
                      day: '2-digit',
                      hour: '2-digit',
                      minute: '2-digit',
                      second: '2-digit',
                    }).format(vaccine.time)}
                  </Table.Cell>
                  <Table.Cell>{vaccine.status}</Table.Cell>
                  <Table.Cell onClick={handleClick}>{vaccine.from}</Table.Cell>
                  <Table.Cell>{vaccine.to}</Table.Cell>
                </Table.Row>
              ))}
          </Table.Body>
        </Table>
      </Stack>
    </Stack>
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

// function hex_to_ascii(str1) {
//   var hex = str1.toString()
//   var str = ''
//   for (var n = 0; n < hex.length; n += 2) {
//     str += String.fromCharCode(parseInt(hex.substr(n, 2), 16))
//   }
//   return str
// }
