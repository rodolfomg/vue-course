import trae from 'trae'
import airtableConfig from './airtable-config'

const airtableService = trae.create({
  baseUrl: airtableConfig.url,
  headers: {
    Authorization: airtableConfig.token
  }
})

export default airtableService
