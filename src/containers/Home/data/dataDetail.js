/* eslint-disable */
module.exports = {
	1:{
		users: {
			"meta": {
			"total-rows": "1",
			"total-pages": 1
			},
			"links": {
			"self": "/users/2?userId=2&organisationId=1"
			},
			"data": [
			  {
			"type": "users",
			"id": 2,
			"attributes": {
			"audit": {
			"insertedDate": 1382328111000,
			"insertedBy": 0,
			"updatedDate": 1468899111000,
			"updatedBy": 0
			},
			"username": "Dave",
			"firstName": "David",
			"surname": "Bromley",
			"rememberMe": "No",
			"passwordResetRequired": "No",
			"lastLoggedInDate": 1468899111000,
			"acceptTermsAndConditions": 1406577512000,
			"loginEmail": "dave@nomosone.com",
			"walkThrough": [],
			"walkThroughNotification": true,
			"toDo": {
			"toDos": [],
			"viewMode": "all"
			},
			"seenNewDashboardWelcome": true,
			"navigatorMode": "expand"
			}
			}
			],
		},
		agreements: {
			"meta": {
			"total-rows": "85",
			"total-pages": 1
			},
			"links": {
			"self": "/organisations/1/agreements?sort=knownAs&offset=0&rows=200"
			},
			"data": [
			  {
			"type": "agreements",
			"id": 5531,
			"attributes": {
			"insertedDate": 1402012192000,
			"insertedBy": 2,
			"updatedDate": 1461105380000,
			"knownAs": "14 Tansey Crescent \/, Stoney Stanton",
			"internalReferences": [],
			"jurisdiction": "New Zealand",
			"agreementType": "Lease",
			"client": "Landlord",
			"currency": "NZD",
			"commercial": "Yes",
			"agreementMode": "Inactive",
			"commencementDate": "1404129600000",
			"expiryDate": "1688040000000",
			"totalAnnualRent": "50000.00",
			"rent": {
			"premises": {
			"annual": "50000.00",
			"monthly": "4166.67",
			"weekly": "961.54"
			},
			"carparks": {
			"annual": "0.00",
			"monthly": "0.00",
			"weekly": "0.00"
			}
			},
			"paymentPeriod": "Monthly",
			"rentPaymentDay": "1st",
			"rentPaymentMonth": "January",
			"rentDay": "Sunday",
			"taxation": "Incl. Tax",
			"fileNotes": "These are some notes",
			"initialState": {
			"agreement": {
			"agreementId": "5531",
			"agreementType": "Lease",
			"client": "Landlord",
			"currency": "NZD",
			"commercial": "Yes",
			"agreementMode": "Active",
			"commencementDate": "1404129600000",
			"expiryDate": "1688040000000",
			"totalAnnualRent": "50000.00",
			"rent": {
			"premises": {
			"annual": "50000.00",
			"monthly": "4166.67",
			"weekly": "961.54"
			},
			"carparks": {
			"annual": "0.00",
			"monthly": "0.00",
			"weekly": "0.00"
			}
			},
			"paymentPeriod": "Monthly",
			"rentPaymentDay": "1st",
			"rentPaymentMonth": "January",
			"rentDay": "Sunday",
			"taxation": "Incl. Tax",
			"fileNotes": "These are some notes",
			"parties": {
			"Landlord": [
			  {
			"entityId": "213",
			"entityName": "Mr DAve Philip Bromley"
			}
			],
			"Tenant": [
			  {
			"entityId": "435",
			"entityName": "Test ltd This &amp; That &lt;script&gt;alert('!');&lt;/script&gt;"
			}
			],
			}
			}
			}
			},
			"relationships": {
			"properties": {
			"links": {
			"self": "/organisations/1/agreements/5531/relationships/properties/",
			"related": "/organisations/1/properties/"
			},
			"data": [
			  {
			"type": "properties",
			"id": "4978"
			}
			],
			},
			"organisations": {
			"links": {
			"self": "/organisations/1/agreements/5531/relationships/organisations/",
			"related": "/organisations/"
			},
			"data": [
			  {
			"type": "organisations",
			"id": "1"
			}
			],
			},
			"parties": {
			"Landlord": {
			"links": {
			"self": "/organisations/1/agreements/5531/relationships/parties/Landlord/",
			"related": "/organisations/1/entities/"
			},
			"data": [
			  {
			"type": "entities",
			"id": "213"
			}
			],
			},
			"Tenant": {
			"links": {
			"self": "/organisations/1/agreements/5531/relationships/parties/Tenant/",
			"related": "/organisations/1/entities/"
			},
			"data": [
			  {
			"type": "entities",
			"id": "435"
			}
			],
			}
			}
			}
			},
			  {
			"type": "agreements",
			"id": 8079,
			"attributes": {
			"insertedDate": 1426798815000,
			"insertedBy": 2,
			"updatedDate": 1464216578000,
			"updatedBy": 2,
			"knownAs": "245 Montreal St, Christchurch",
			"internalReferences": [],
			"jurisdiction": "New Zealand",
			"agreementType": "Lease",
			"client": "Landlord",
			"currency": "NZD",
			"commercial": "Yes",
			"agreementMode": "Active",
			"commencementDate": "954504000000",
			"expiryDate": "1333108800000",
			"totalAnnualRent": "0.00",
			"rent": {
			"premises": {
			"annual": "0.00",
			"monthly": "0.00",
			"weekly": "0.00"
			},
			"carparks": {
			"annual": "0.00",
			"monthly": "0.00",
			"weekly": "0.00"
			}
			},
			"paymentPeriod": "Monthly",
			"rentPaymentDay": "1st",
			"rentPaymentMonth": "January",
			"rentDay": "Sunday",
			"taxation": "Plus Tax",
			"initialState": {
			"agreement": {
			"agreementId": "8079",
			"agreementType": "Lease",
			"client": "Landlord",
			"currency": "NZD",
			"commercial": "Yes",
			"agreementMode": "Active",
			"commencementDate": "954504000000",
			"expiryDate": "1333108800000",
			"totalAnnualRent": "0.00",
			"rent": {
			"premises": {
			"annual": "0.00",
			"monthly": "0.00",
			"weekly": "0.00"
			},
			"carparks": {
			"annual": "0.00",
			"monthly": "0.00",
			"weekly": "0.00"
			}
			},
			"paymentPeriod": "Monthly",
			"rentPaymentDay": "1st",
			"rentPaymentMonth": "January",
			"rentDay": "Sunday",
			"taxation": "Plus Tax",
			"parties": {
			"Landlord": [
			  {
			"entityId": "6945",
			"entityName": "Captain Planet"
			}
			],
			}
			}
			}
			},
			"relationships": {
			"properties": {
			"links": {
			"self": "/organisations/1/agreements/8079/relationships/properties/",
			"related": "/organisations/1/properties/"
			},
			"data": [
			  {
			"type": "properties",
			"id": "4982"
			}
			],
			},
			"events": {
			"links": {
			"self": "/organisations/1/agreements/8079/relationships/events/",
			"related": "/organisations/1/events/"
			},
			"data": [
			  {
			"type": "events",
			"id": "44640"
			},
			  {
			"type": "events",
			"id": "44641"
			},
			  {
			"type": "events",
			"id": "44642"
			},
			  {
			"type": "events",
			"id": "44643"
			},
			  {
			"type": "events",
			"id": "44644"
			},
			  {
			"type": "events",
			"id": "44645"
			},
			  {
			"type": "events",
			"id": "44646"
			},
			  {
			"type": "events",
			"id": "44647"
			},
			  {
			"type": "events",
			"id": "44648"
			},
			  {
			"type": "events",
			"id": "44649"
			},
			  {
			"type": "events",
			"id": "44650"
			},
			  {
			"type": "events",
			"id": "44651"
			},
			  {
			"type": "events",
			"id": "44652"
			},
			  {
			"type": "events",
			"id": "165982"
			},
			  {
			"type": "events",
			"id": "165983"
			}
			],
			},
			"organisations": {
			"links": {
			"self": "/organisations/1/agreements/8079/relationships/organisations/",
			"related": "/organisations/"
			},
			"data": [
			  {
			"type": "organisations",
			"id": "1"
			}
			],
			},
			"parties": {
			"Landlord": {
			"links": {
			"self": "/organisations/1/agreements/8079/relationships/parties/Landlord/",
			"related": "/organisations/1/entities/"
			},
			"data": [
			  {
			"type": "entities",
			"id": "6945"
			}
			],
			}
			},
			"notFollowing": {
			"users": {
			"links": {
			"self": "/organisations/1/agreements/8079/relationships/notFollowing/users/",
			"related": "/users/"
			},
			"data": [
			  {
			"type": "users",
			"id": "2"
			},
			  {
			"type": "users",
			"id": "4"
			},
			  {
			"type": "users",
			"id": "8"
			},
			  {
			"type": "users",
			"id": "59"
			},
			  {
			"type": "users",
			"id": "60"
			}
			],
			}
			}
			}
			},
			  {
			"type": "agreements",
			"id": 5540,
			"attributes": {
			"insertedDate": 1402819643000,
			"insertedBy": 2,
			"updatedDate": 1461105380000,
			"knownAs": "32 Gledhow Park Grove, Leeds ",
			"legalDescription": "Lot 2, DP5555",
			"internalReferences": [
			  "fdg",
			  "Helo"
			],
			"jurisdiction": "New Zealand",
			"agreementType": "Lease",
			"client": "Landlord",
			"currency": "NZD",
			"commercial": "Yes",
			"agreementMode": "Active",
			"commencementDate": "1404129600000",
			"totalAnnualRent": "55001.00",
			"rent": {
			"premises": {
			"annual": "55000.00",
			"monthly": "4583.33",
			"weekly": "1057.69"
			},
			"carparks": {
			"annual": "1.00",
			"monthly": "0.08",
			"weekly": "0.02"
			}
			},
			"paymentPeriod": "Monthly",
			"rentPaymentDay": "1st",
			"rentPaymentMonth": "January",
			"rentDay": "Sunday",
			"taxation": "Plus Tax",
			"initialState": {
			"agreement": {
			"agreementId": "5540",
			"agreementType": "Lease",
			"client": "Landlord",
			"currency": "NZD",
			"commercial": "Yes",
			"agreementMode": "Active",
			"commencementDate": "1404129600000",
			"totalAnnualRent": "55001.00",
			"rent": {
			"premises": {
			"annual": "55000.00",
			"monthly": "4583.33",
			"weekly": "1057.69"
			},
			"carparks": {
			"annual": "1.00",
			"monthly": "0.08",
			"weekly": "0.02"
			}
			},
			"paymentPeriod": "Monthly",
			"rentPaymentDay": "1st",
			"rentPaymentMonth": "January",
			"rentDay": "Sunday",
			"taxation": "Plus Tax",
			"parties": {
			"Landlord": [
			  {
			"entityId": "435",
			"entityName": "Test ltd This &amp; That &lt;script&gt;alert('!');&lt;/script&gt;"
			}
			],
			"Tenant": [
			  {
			"entityId": "454",
			"entityName": "wat wat ltd"
			}
			],
			"Guarantor": [
			  {
			"entityId": "435",
			"entityName": "Test ltd This &amp; That &lt;script&gt;alert('!');&lt;/script&gt;"
			}
			],
			}
			}
			}
			},
			"relationships": {
			"properties": {
			"links": {
			"self": "/organisations/1/agreements/5540/relationships/properties/",
			"related": "/organisations/1/properties/"
			},
			"data": [
			  {
			"type": "properties",
			"id": "204"
			}
			],
			},
			"events": {
			"links": {
			"self": "/organisations/1/agreements/5540/relationships/events/",
			"related": "/organisations/1/events/"
			},
			"data": [
			  {
			"type": "events",
			"id": "2418"
			},
			  {
			"type": "events",
			"id": "6289"
			},
			  {
			"type": "events",
			"id": "6290"
			},
			  {
			"type": "events",
			"id": "40524"
			},
			  {
			"type": "events",
			"id": "40525"
			},
			  {
			"type": "events",
			"id": "42996"
			},
			  {
			"type": "events",
			"id": "47539"
			},
			  {
			"type": "events",
			"id": "47540"
			}
			],
			},
			"organisations": {
			"links": {
			"self": "/organisations/1/agreements/5540/relationships/organisations/",
			"related": "/organisations/"
			},
			"data": [
			  {
			"type": "organisations",
			"id": "1"
			}
			],
			},
			"parties": {
			"Landlord": {
			"links": {
			"self": "/organisations/1/agreements/5540/relationships/parties/Landlord/",
			"related": "/organisations/1/entities/"
			},
			"data": [
			  {
			"type": "entities",
			"id": "435"
			}
			],
			},
			"Tenant": {
			"links": {
			"self": "/organisations/1/agreements/5540/relationships/parties/Tenant/",
			"related": "/organisations/1/entities/"
			},
			"data": [
			  {
			"type": "entities",
			"id": "454"
			}
			],
			},
			"Guarantor": {
			"links": {
			"self": "/organisations/1/agreements/5540/relationships/parties/Guarantor/",
			"related": "/organisations/1/entities/"
			},
			"data": [
			  {
			"type": "entities",
			"id": "435"
			}
			],
			}
			}
			}
			},
			  {
			"type": "agreements",
			"id": 5599,
			"attributes": {
			"insertedDate": 1404188293000,
			"insertedBy": 2,
			"updatedDate": 1461105380000,
			"knownAs": "33 Pitt St, Dunedin",
			"internalReferences": [],
			"jurisdiction": "New Zealand",
			"agreementType": "License",
			"client": "Licensor",
			"currency": "NZD",
			"commercial": "Yes",
			"agreementMode": "Active",
			"commencementDate": "1406808000000",
			"totalAnnualRent": "6000.00",
			"rent": {
			"premises": {
			"annual": "6000.00",
			"monthly": "500.00",
			"weekly": "115.38"
			},
			"carparks": {
			"annual": "0.00",
			"monthly": "0.00",
			"weekly": "0.00"
			}
			},
			"paymentPeriod": "Monthly",
			"rentPaymentDay": "1st",
			"rentPaymentMonth": "January",
			"rentDay": "Sunday",
			"taxation": "Incl. Tax",
			"initialState": {
			"agreement": {
			"agreementId": "5599",
			"agreementType": "License",
			"client": "Licensor",
			"currency": "NZD",
			"commercial": "Yes",
			"agreementMode": "Active",
			"commencementDate": "1406808000000",
			"totalAnnualRent": "6000.00",
			"rent": {
			"premises": {
			"annual": "6000.00",
			"monthly": "500.00",
			"weekly": "115.38"
			},
			"carparks": {
			"annual": "0.00",
			"monthly": "0.00",
			"weekly": "0.00"
			}
			},
			"paymentPeriod": "Monthly",
			"rentPaymentDay": "1st",
			"rentPaymentMonth": "January",
			"rentDay": "Sunday",
			"taxation": "Incl. Tax",
			"parties": {
			"Licensor": [
			  {
			"entityId": "517",
			"entityName": "Mr ASB"
			}
			],
			"Licensee": [
			  {
			"entityId": "213",
			"entityName": "Mr DAve Philip Bromley"
			}
			],
			"Guarantor": [
			  {
			"entityId": "752",
			"entityName": "Mr Hello Goodbye"
			}
			],
			}
			}
			}
			},
			"relationships": {
			"properties": {
			"links": {
			"self": "/organisations/1/agreements/5599/relationships/properties/",
			"related": "/organisations/1/properties/"
			},
			"data": [
			  {
			"type": "properties",
			"id": "4977"
			},
			  {
			"type": "properties",
			"id": "240"
			}
			],
			},
			"events": {
			"links": {
			"self": "/organisations/1/agreements/5599/relationships/events/",
			"related": "/organisations/1/events/"
			},
			"data": [
			  {
			"type": "events",
			"id": "5975"
			}
			],
			},
			"organisations": {
			"links": {
			"self": "/organisations/1/agreements/5599/relationships/organisations/",
			"related": "/organisations/"
			},
			"data": [
			  {
			"type": "organisations",
			"id": "1"
			}
			],
			},
			"parties": {
			"Licensor": {
			"links": {
			"self": "/organisations/1/agreements/5599/relationships/parties/Licensor/",
			"related": "/organisations/1/entities/"
			},
			"data": [
			  {
			"type": "entities",
			"id": "517"
			}
			],
			},
			"Licensee": {
			"links": {
			"self": "/organisations/1/agreements/5599/relationships/parties/Licensee/",
			"related": "/organisations/1/entities/"
			},
			"data": [
			  {
			"type": "entities",
			"id": "213"
			}
			],
			},
			"Guarantor": {
			"links": {
			"self": "/organisations/1/agreements/5599/relationships/parties/Guarantor/",
			"related": "/organisations/1/entities/"
			},
			"data": [
			  {
			"type": "entities",
			"id": "752"
			}
			],
			}
			}
			}
			},
			  {
			"type": "agreements",
			"id": 7885,
			"attributes": {
			"insertedDate": 1422438050000,
			"insertedBy": 2,
			"updatedDate": 1467078398000,
			"updatedBy": 2,
			"knownAs": "56 Cashel St, Christchurch",
			"internalReferences": [],
			"jurisdiction": "New Zealand",
			"agreementType": "Lease",
			"client": "Landlord",
			"currency": "NZD",
			"commercial": "Yes",
			"agreementMode": "Active",
			"commencementDate": "1422705600000",
			"expiryDate": "1675080000000",
			"totalAnnualRent": "0.00",
			"rent": {
			"premises": {
			"annual": "0.00",
			"monthly": "0.00",
			"weekly": "0.00"
			},
			"carparks": {
			"annual": "0.00",
			"monthly": "0.00",
			"weekly": "0.00"
			}
			},
			"paymentStartDate": "1420027200000",
			"paymentPeriod": "Monthly",
			"rentPaymentDay": "1st",
			"rentPaymentMonth": "January",
			"rentDay": "Sunday",
			"taxation": "Plus Tax",
			"initialState": {
			"agreement": {
			"agreementId": "7885",
			"agreementType": "Lease",
			"client": "Landlord",
			"currency": "NZD",
			"commercial": "Yes",
			"agreementMode": "Active",
			"commencementDate": "1422705600000",
			"expiryDate": "1675080000000",
			"totalAnnualRent": "0.00",
			"rent": {
			"premises": {
			"annual": "0.00",
			"monthly": "0.00",
			"weekly": "0.00"
			},
			"carparks": {
			"annual": "0.00",
			"monthly": "0.00",
			"weekly": "0.00"
			}
			},
			"paymentStartDate": "1420027200000",
			"paymentPeriod": "Monthly",
			"rentPaymentDay": "1st",
			"rentPaymentMonth": "January",
			"rentDay": "Sunday",
			"taxation": "Plus Tax",
			"parties": {
			"Landlord": [
			  {
			"entityId": "6437",
			"entityName": "Mel"
			}
			],
			}
			}
			}
			},
			"relationships": {
			"properties": {
			"links": {
			"self": "/organisations/1/agreements/7885/relationships/properties/",
			"related": "/organisations/1/properties/"
			},
			"data": [
			  {
			"type": "properties",
			"id": "1542"
			},
			  {
			"type": "properties",
			"id": "1542"
			}
			],
			},
			"notes": {
			"links": {
			"self": "/organisations/1/agreements/7885/relationships/notes/",
			"related": "/organisations/1/notes/"
			},
			"data": [
			  {
			"type": "notes",
			"id": 120
			},
			  {
			"type": "notes",
			"id": 119
			},
			  {
			"type": "notes",
			"id": 118
			},
			  {
			"type": "notes",
			"id": 117
			},
			  {
			"type": "notes",
			"id": 116
			},
			  {
			"type": "notes",
			"id": 115
			},
			  {
			"type": "notes",
			"id": 114
			},
			  {
			"type": "notes",
			"id": 113
			},
			  {
			"type": "notes",
			"id": 112
			}
			],
			},
			"events": {
			"links": {
			"self": "/organisations/1/agreements/7885/relationships/events/",
			"related": "/organisations/1/events/"
			},
			"data": [
			  {
			"type": "events",
			"id": "31973"
			},
			  {
			"type": "events",
			"id": "31975"
			},
			  {
			"type": "events",
			"id": "31976"
			},
			  {
			"type": "events",
			"id": "31977"
			},
			  {
			"type": "events",
			"id": "31978"
			},
			  {
			"type": "events",
			"id": "31979"
			},
			  {
			"type": "events",
			"id": "31981"
			},
			  {
			"type": "events",
			"id": "31983"
			},
			  {
			"type": "events",
			"id": "31985"
			}
			],
			},
			"organisations": {
			"links": {
			"self": "/organisations/1/agreements/7885/relationships/organisations/",
			"related": "/organisations/"
			},
			"data": [
			  {
			"type": "organisations",
			"id": "1"
			}
			],
			},
			"parties": {
			"Landlord": {
			"links": {
			"self": "/organisations/1/agreements/7885/relationships/parties/Landlord/",
			"related": "/organisations/1/entities/"
			},
			"data": [
			  {
			"type": "entities",
			"id": "6437"
			}
			],
			}
			}
			}
			},
			  {
			"type": "agreements",
			"id": 10423,
			"attributes": {
			"insertedDate": 1439857662000,
			"insertedBy": 2,
			"updatedDate": 1461105380000,
			"knownAs": "78 Albany Street, Dunedin",
			"internalReferences": [],
			"jurisdiction": "New Zealand",
			"agreementType": "Lease",
			"client": "Landlord",
			"currency": "NZD",
			"commercial": "Yes",
			"agreementMode": "Active",
			"commencementDate": "1406808000000",
			"expiryDate": "1659182400000",
			"totalAnnualRent": "6000.00",
			"rent": {
			"premises": {
			"annual": "6000.00",
			"monthly": "500.00",
			"weekly": "115.38"
			},
			"carparks": {
			"annual": "0.00",
			"monthly": "0.00",
			"weekly": "0.00"
			}
			},
			"paymentStartDate": "1406808000000",
			"paymentPeriod": "Monthly",
			"rentPaymentDay": "1st",
			"rentPaymentMonth": "January",
			"rentDay": "Sunday",
			"taxation": "Plus Tax",
			"initialState": {
			"agreement": {
			"agreementId": "10423",
			"agreementType": "Lease",
			"client": "Landlord",
			"currency": "NZD",
			"commercial": "Yes",
			"agreementMode": "Active",
			"commencementDate": "1406808000000",
			"expiryDate": "1659182400000",
			"totalAnnualRent": "6000.00",
			"rent": {
			"premises": {
			"annual": "6000.00",
			"monthly": "500.00",
			"weekly": "115.38"
			},
			"carparks": {
			"annual": "0.00",
			"monthly": "0.00",
			"weekly": "0.00"
			}
			},
			"paymentStartDate": "1406808000000",
			"paymentPeriod": "Monthly",
			"rentPaymentDay": "1st",
			"rentPaymentMonth": "January",
			"rentDay": "Sunday",
			"taxation": "Plus Tax",
			"parties": {
			"Landlord": [
			  {
			"entityId": "751",
			"entityName": "fred corp"
			}
			],
			"Tenant": [
			  {
			"entityId": "6945",
			"entityName": "Captain Planet"
			}
			],
			}
			}
			}
			},
			"relationships": {
			"properties": {
			"links": {
			"self": "/organisations/1/agreements/10423/relationships/properties/",
			"related": "/organisations/1/properties/"
			},
			"data": [
			  {
			"type": "properties",
			"id": "2557"
			}
			],
			},
			"events": {
			"links": {
			"self": "/organisations/1/agreements/10423/relationships/events/",
			"related": "/organisations/1/events/"
			},
			"data": [
			  {
			"type": "events",
			"id": "89322"
			},
			  {
			"type": "events",
			"id": "89323"
			},
			  {
			"type": "events",
			"id": "89324"
			},
			  {
			"type": "events",
			"id": "89325"
			},
			  {
			"type": "events",
			"id": "89326"
			},
			  {
			"type": "events",
			"id": "89327"
			},
			  {
			"type": "events",
			"id": "89328"
			},
			  {
			"type": "events",
			"id": "89329"
			}
			],
			},
			"organisations": {
			"links": {
			"self": "/organisations/1/agreements/10423/relationships/organisations/",
			"related": "/organisations/"
			},
			"data": [
			  {
			"type": "organisations",
			"id": "1"
			}
			],
			},
			"parties": {
			"Landlord": {
			"links": {
			"self": "/organisations/1/agreements/10423/relationships/parties/Landlord/",
			"related": "/organisations/1/entities/"
			},
			"data": [
			  {
			"type": "entities",
			"id": "751"
			}
			],
			},
			"Tenant": {
			"links": {
			"self": "/organisations/1/agreements/10423/relationships/parties/Tenant/",
			"related": "/organisations/1/entities/"
			},
			"data": [
			  {
			"type": "entities",
			"id": "6945"
			}
			],
			}
			}
			}
			},
			  {
			"type": "agreements",
			"id": 30124,
			"attributes": {
			"insertedDate": 1443588811000,
			"insertedBy": 2,
			"updatedDate": 1461105380000,
			"knownAs": "80 Forbury Road, Dunedin",
			"internalReferences": [],
			"jurisdiction": "New Zealand",
			"agreementType": "Lease",
			"client": "Landlord",
			"currency": "NZD",
			"commercial": "Yes",
			"agreementMode": "Active",
			"totalAnnualRent": "0.00",
			"rent": {
			"premises": {
			"annual": "0.00",
			"monthly": "0.00",
			"weekly": "0.00"
			},
			"carparks": {
			"annual": "0.00",
			"monthly": "0.00",
			"weekly": "0.00"
			}
			},
			"paymentStartDate": "1441281600000",
			"paymentPeriod": "Monthly",
			"rentPaymentDay": "1st",
			"rentPaymentMonth": "January",
			"rentDay": "Sunday",
			"taxation": "Plus Tax",
			"initialState": {
			"agreement": {
			"agreementId": "30124",
			"agreementType": "Lease",
			"client": "Landlord",
			"currency": "NZD",
			"commercial": "Yes",
			"agreementMode": "Inactive",
			"totalAnnualRent": "0.00",
			"rent": {
			"premises": {
			"annual": "0.00",
			"monthly": "0.00",
			"weekly": "0.00"
			},
			"carparks": {
			"annual": "0.00",
			"monthly": "0.00",
			"weekly": "0.00"
			}
			},
			"paymentStartDate": "1441281600000",
			"paymentPeriod": "Monthly",
			"rentPaymentDay": "1st",
			"rentPaymentMonth": "January",
			"rentDay": "Sunday",
			"taxation": "Plus Tax",
			"parties": {
			"Landlord": [
			  {
			"entityId": "751",
			"entityName": "fred corp"
			}
			],
			"Tenant": [
			  {
			"entityId": "754",
			"entityName": "Mr Explorer Ltd"
			}
			],
			}
			}
			},
			"commencementDate": "1283256000000",
			"expiryDate": "1472558400000"
			},
			"relationships": {
			"events": {
			"links": {
			"self": "/organisations/1/agreements/30124/relationships/events/",
			"related": "/organisations/1/events/"
			},
			"data": [
			  {
			"type": "events",
			"id": "103238"
			},
			  {
			"type": "events",
			"id": "103239"
			},
			  {
			"type": "events",
			"id": "103241"
			},
			  {
			"type": "events",
			"id": "153935"
			}
			],
			},
			"organisations": {
			"links": {
			"self": "/organisations/1/agreements/30124/relationships/organisations/",
			"related": "/organisations/"
			},
			"data": [
			  {
			"type": "organisations",
			"id": "1"
			}
			],
			},
			"parties": {
			"Landlord": {
			"links": {
			"self": "/organisations/1/agreements/30124/relationships/parties/Landlord/",
			"related": "/organisations/1/entities/"
			},
			"data": [
			  {
			"type": "entities",
			"id": "751"
			}
			],
			},
			"Tenant": {
			"links": {
			"self": "/organisations/1/agreements/30124/relationships/parties/Tenant/",
			"related": "/organisations/1/entities/"
			},
			"data": [
			  {
			"type": "entities",
			"id": "754"
			}
			],
			}
			}
			}
			},
			  {
			"type": "agreements",
			"id": 75921,
			"attributes": {
			"insertedDate": 1450391590000,
			"insertedBy": 2,
			"updatedDate": 1461105380000,
			"knownAs": "89 Great King Street, Dunedin",
			"internalReferences": [],
			"jurisdiction": "New Zealand",
			"agreementType": "Sublease",
			"client": "HeadLessor",
			"currency": "NZD",
			"commercial": "Yes",
			"agreementMode": "Active",
			"totalAnnualRent": "5000.00",
			"rent": {
			"premises": {
			"annual": "5000.00",
			"monthly": "416.67",
			"weekly": "96.15"
			},
			"carparks": {
			"annual": "0.00",
			"monthly": "0.00",
			"weekly": "0.00"
			}
			},
			"paymentStartDate": "1291118400000",
			"paymentPeriod": "Monthly",
			"rentPaymentDay": "1st",
			"rentPaymentMonth": "January",
			"rentDay": "Sunday",
			"taxation": "Plus Tax",
			"initialState": {
			"agreement": {
			"agreementId": "75921",
			"agreementType": "Sublease",
			"client": "HeadLessor",
			"currency": "NZD",
			"commercial": "Yes",
			"agreementMode": "Inactive",
			"totalAnnualRent": "5000.00",
			"rent": {
			"premises": {
			"annual": "5000.00",
			"monthly": "416.67",
			"weekly": "96.15"
			},
			"carparks": {
			"annual": "0.00",
			"monthly": "0.00",
			"weekly": "0.00"
			}
			},
			"paymentStartDate": "1291118400000",
			"paymentPeriod": "Monthly",
			"rentPaymentDay": "1st",
			"rentPaymentMonth": "January",
			"rentDay": "Sunday",
			"taxation": "Plus Tax",
			"parties": {
			"Sub Lessor": [
			  {
			"entityId": "752",
			"entityName": "Mr Hello Goodbye"
			},
			  {
			"entityId": 7706,
			"entityName": "Mrs Jemma Gems"
			}
			],
			"Head Lessor": [
			  {
			"entityId": "7115",
			"entityName": "A new trust"
			}
			],
			"Sub Lessee": [
			  {
			"entityId": "7703",
			"entityName": "test dave"
			}
			],
			"Guarantor": [
			  {
			"entityId": "454",
			"entityName": "wat wat ltd"
			}
			],
			}
			}
			},
			"commencementDate": "1291118400000",
			"expiryDate": "1606651200000"
			},
			"relationships": {
			"properties": {
			"links": {
			"self": "/organisations/1/agreements/75921/relationships/properties/",
			"related": "/organisations/1/properties/"
			},
			"data": [
			  {
			"type": "properties",
			"id": "3599"
			}
			],
			},
			"events": {
			"links": {
			"self": "/organisations/1/agreements/75921/relationships/events/",
			"related": "/organisations/1/events/"
			},
			"data": [
			  {
			"type": "events",
			"id": "125388"
			},
			  {
			"type": "events",
			"id": "125389"
			},
			  {
			"type": "events",
			"id": "125390"
			},
			  {
			"type": "events",
			"id": "125391"
			},
			  {
			"type": "events",
			"id": "125392"
			},
			  {
			"type": "events",
			"id": "125393"
			}
			],
			},
			"organisations": {
			"links": {
			"self": "/organisations/1/agreements/75921/relationships/organisations/",
			"related": "/organisations/"
			},
			"data": [
			  {
			"type": "organisations",
			"id": "1"
			}
			],
			},
			"parties": {
			"Sub Lessor": {
			"links": {
			"self": "/organisations/1/agreements/75921/relationships/parties/Sub Lessor/",
			"related": "/organisations/1/entities/"
			},
			"data": [
			  {
			"type": "entities",
			"id": "752"
			},
			  {
			"type": "entities",
			"id": 7706
			}
			],
			},
			"Head Lessor": {
			"links": {
			"self": "/organisations/1/agreements/75921/relationships/parties/Head Lessor/",
			"related": "/organisations/1/entities/"
			},
			"data": [
			  {
			"type": "entities",
			"id": "7115"
			}
			],
			},
			"Sub Lessee": {
			"links": {
			"self": "/organisations/1/agreements/75921/relationships/parties/Sub Lessee/",
			"related": "/organisations/1/entities/"
			},
			"data": [
			  {
			"type": "entities",
			"id": "7703"
			}
			],
			},
			"Guarantor": {
			"links": {
			"self": "/organisations/1/agreements/75921/relationships/parties/Guarantor/",
			"related": "/organisations/1/entities/"
			},
			"data": [
			  {
			"type": "entities",
			"id": "454"
			}
			],
			}
			}
			}
			},
			  {
			"type": "agreements",
			"id": 8221,
			"attributes": {
			"insertedDate": 1430356143000,
			"insertedBy": 2,
			"updatedDate": 1461044425000,
			"knownAs": "ANZAC thursday",
			"internalReferences": [],
			"jurisdiction": "New Zealand",
			"agreementType": "Sublease",
			"client": "HeadLessor",
			"currency": "NZD",
			"commercial": "Yes",
			"agreementMode": "Active",
			"commencementDate": "1333195200000",
			"expiryDate": "1522411200000",
			"totalAnnualRent": "6000.00",
			"rent": {
			"premises": {
			"annual": "6000.00",
			"monthly": "500.00",
			"weekly": "115.38"
			},
			"carparks": {
			"annual": "0.00",
			"monthly": "0.00",
			"weekly": "0.00"
			}
			},
			"paymentStartDate": "1333195200000",
			"paymentPeriod": "Monthly",
			"rentPaymentDay": "1st",
			"rentPaymentMonth": "January",
			"rentDay": "Sunday",
			"taxation": "Plus Tax",
			"initialState": {
			"agreement": {
			"agreementId": "8221",
			"agreementType": "Sublease",
			"client": "HeadLessor",
			"currency": "NZD",
			"commercial": "Yes",
			"agreementMode": "Active",
			"commencementDate": "1333195200000",
			"expiryDate": "1522411200000",
			"totalAnnualRent": "6000.00",
			"rent": {
			"premises": {
			"annual": "6000.00",
			"monthly": "500.00",
			"weekly": "115.38"
			},
			"carparks": {
			"annual": "0.00",
			"monthly": "0.00",
			"weekly": "0.00"
			}
			},
			"paymentStartDate": "1333195200000",
			"paymentPeriod": "Monthly",
			"rentPaymentDay": "1st",
			"rentPaymentMonth": "January",
			"rentDay": "Sunday",
			"taxation": "Plus Tax",
			"parties": {
			"Head_Lessor": [
			  {
			"entityId": "751",
			"entityName": "fred corp"
			}
			],
			"Sub_Lessor": [
			  {
			"entityId": "214",
			"entityName": "Jill Maloney Trust"
			}
			],
			"Guarantor": [
			  {
			"entityId": "6946",
			"entityName": "Superman"
			}
			],
			"Sub_Lessee": [
			  {
			"entityId": "6948",
			"entityName": "Allegiance of Niceness"
			}
			],
			}
			}
			}
			},
			"relationships": {
			"properties": {
			"links": {
			"self": "/organisations/1/agreements/8221/relationships/properties/",
			"related": "/organisations/1/properties/"
			},
			"data": [
			  {
			"type": "properties",
			"id": "1725"
			}
			],
			},
			"notes": {
			"links": {
			"self": "/organisations/1/agreements/8221/relationships/notes/",
			"related": "/organisations/1/notes/"
			},
			"data": [
			  {
			"type": "notes",
			"id": 276
			},
			  {
			"type": "notes",
			"id": 275
			}
			],
			},
			"events": {
			"links": {
			"self": "/organisations/1/agreements/8221/relationships/events/",
			"related": "/organisations/1/events/"
			},
			"data": [
			  {
			"type": "events",
			"id": "48858"
			},
			  {
			"type": "events",
			"id": "48859"
			},
			  {
			"type": "events",
			"id": "48860"
			},
			  {
			"type": "events",
			"id": "48861"
			},
			  {
			"type": "events",
			"id": "48862"
			},
			  {
			"type": "events",
			"id": "48864"
			},
			  {
			"type": "events",
			"id": "48866"
			},
			  {
			"type": "events",
			"id": "48995"
			}
			],
			},
			"organisations": {
			"links": {
			"self": "/organisations/1/agreements/8221/relationships/organisations/",
			"related": "/organisations/"
			},
			"data": [
			  {
			"type": "organisations",
			"id": "1"
			}
			],
			},
			"parties": {
			"Head_Lessor": {
			"links": {
			"self": "/organisations/1/agreements/8221/relationships/parties/Head_Lessor/",
			"related": "/organisations/1/entities/"
			},
			"data": [
			  {
			"type": "entities",
			"id": "751"
			}
			],
			},
			"Sub_Lessor": {
			"links": {
			"self": "/organisations/1/agreements/8221/relationships/parties/Sub_Lessor/",
			"related": "/organisations/1/entities/"
			},
			"data": [
			  {
			"type": "entities",
			"id": "214"
			}
			],
			},
			"Guarantor": {
			"links": {
			"self": "/organisations/1/agreements/8221/relationships/parties/Guarantor/",
			"related": "/organisations/1/entities/"
			},
			"data": [
			  {
			"type": "entities",
			"id": "6946"
			}
			],
			},
			"Sub_Lessee": {
			"links": {
			"self": "/organisations/1/agreements/8221/relationships/parties/Sub_Lessee/",
			"related": "/organisations/1/entities/"
			},
			"data": [
			  {
			"type": "entities",
			"id": "6948"
			}
			],
			}
			}
			}
			},
			  {
			"type": "agreements",
			"id": 8224,
			"attributes": {
			"insertedDate": 1430366109000,
			"insertedBy": 2,
			"updatedDate": 1461044425000,
			"knownAs": "ANZAC thursday part 2",
			"internalReferences": [
			  "gfdgd"
			],
			"jurisdiction": "New Zealand",
			"agreementType": "License",
			"client": "Licensor",
			"currency": "NZD",
			"commercial": "Yes",
			"agreementMode": "Active",
			"commencementDate": "891345600000",
			"expiryDate": "1206878400000",
			"totalAnnualRent": "3223233.00",
			"rent": {
			"premises": {
			"annual": "3223233.00",
			"monthly": "268602.75",
			"weekly": "61985.25"
			},
			"carparks": {
			"annual": "0.00",
			"monthly": "0.00",
			"weekly": "0.00"
			}
			},
			"paymentStartDate": "891345600000",
			"paymentPeriod": "Monthly",
			"rentPaymentDay": "1st",
			"rentPaymentMonth": "January",
			"rentDay": "Sunday",
			"taxation": "Plus Tax",
			"initialState": {
			"agreement": {
			"agreementId": "8224",
			"agreementType": "License",
			"client": "Licensor",
			"currency": "NZD",
			"commercial": "Yes",
			"agreementMode": "Active",
			"commencementDate": "891345600000",
			"expiryDate": "1206878400000",
			"totalAnnualRent": "3223233.00",
			"rent": {
			"premises": {
			"annual": "3223233.00",
			"monthly": "268602.75",
			"weekly": "61985.25"
			},
			"carparks": {
			"annual": "0.00",
			"monthly": "0.00",
			"weekly": "0.00"
			}
			},
			"paymentStartDate": "891345600000",
			"paymentPeriod": "Monthly",
			"rentPaymentDay": "1st",
			"rentPaymentMonth": "January",
			"rentDay": "Sunday",
			"taxation": "Plus Tax",
			"parties": {
			"Licensee": [
			  {
			"entityId": "213",
			"entityName": "Mr DAve Philip Bromley"
			}
			],
			"Guarantor": [
			  {
			"entityId": "436",
			"entityName": "Mr Fred Bloggs"
			}
			],
			"Licensor": [
			  {
			"entityId": "7115",
			"entityName": "A new trust"
			},
			  {
			"entityId": 6951,
			"entityName": "Trusting Trustees Trust"
			}
			],
			}
			}
			}
			},
			"relationships": {
			"properties": {
			"links": {
			"self": "/organisations/1/agreements/8224/relationships/properties/",
			"related": "/organisations/1/properties/"
			},
			"data": [
			  {
			"type": "properties",
			"id": "4979"
			}
			],
			},
			"events": {
			"links": {
			"self": "/organisations/1/agreements/8224/relationships/events/",
			"related": "/organisations/1/events/"
			},
			"data": [
			  {
			"type": "events",
			"id": "48996"
			},
			  {
			"type": "events",
			"id": "48997"
			},
			  {
			"type": "events",
			"id": "49006"
			},
			  {
			"type": "events",
			"id": "49008"
			},
			  {
			"type": "events",
			"id": "49010"
			},
			  {
			"type": "events",
			"id": "49012"
			},
			  {
			"type": "events",
			"id": "74502"
			},
			  {
			"type": "events",
			"id": "74504"
			},
			  {
			"type": "events",
			"id": "74506"
			},
			  {
			"type": "events",
			"id": "74508"
			},
			  {
			"type": "events",
			"id": "74510"
			},
			  {
			"type": "events",
			"id": "96009"
			},
			  {
			"type": "events",
			"id": "103142"
			}
			],
			},
			"organisations": {
			"links": {
			"self": "/organisations/1/agreements/8224/relationships/organisations/",
			"related": "/organisations/"
			},
			"data": [
			  {
			"type": "organisations",
			"id": "1"
			}
			],
			},
			"parties": {
			"Licensee": {
			"links": {
			"self": "/organisations/1/agreements/8224/relationships/parties/Licensee/",
			"related": "/organisations/1/entities/"
			},
			"data": [
			  {
			"type": "entities",
			"id": "213"
			}
			],
			},
			"Guarantor": {
			"links": {
			"self": "/organisations/1/agreements/8224/relationships/parties/Guarantor/",
			"related": "/organisations/1/entities/"
			},
			"data": [
			  {
			"type": "entities",
			"id": "436"
			}
			],
			},
			"Licensor": {
			"links": {
			"self": "/organisations/1/agreements/8224/relationships/parties/Licensor/",
			"related": "/organisations/1/entities/"
			},
			"data": [
			  {
			"type": "entities",
			"id": "7115"
			},
			  {
			"type": "entities",
			"id": 6951
			}
			],
			}
			},
			"notFollowing": {
			"users": {
			"links": {
			"self": "/organisations/1/agreements/8224/relationships/notFollowing/users/",
			"related": "/users/"
			},
			"data": [
			  {
			"type": "users",
			"id": "4"
			},
			  {
			"type": "users",
			"id": "6"
			},
			  {
			"type": "users",
			"id": "8"
			},
			  {
			"type": "users",
			"id": "58"
			},
			  {
			"type": "users",
			"id": "59"
			},
			  {
			"type": "users",
			"id": "60"
			},
			  {
			"type": "users",
			"id": "226"
			}
			],
			}
			}
			}
			},
			  {
			"type": "agreements",
			"id": 5584,
			"attributes": {
			"insertedDate": 1403592044000,
			"insertedBy": 2,
			"updatedDate": 1461105380000,
			"knownAs": "Allée Saturne, Agde",
			"internalReferences": [],
			"jurisdiction": "New Zealand",
			"agreementType": "Lease",
			"client": "Landlord",
			"currency": "NZD",
			"commercial": "Yes",
			"agreementMode": "Inactive",
			"commencementDate": "1275307200000",
			"expiryDate": "1338379200000",
			"totalAnnualRent": "0.00",
			"rent": {
			"premises": {
			"annual": "0.00",
			"monthly": "0.00",
			"weekly": "0.00"
			},
			"carparks": {
			"annual": "0.00",
			"monthly": "0.00",
			"weekly": "0.00"
			}
			},
			"paymentStartDate": "1275307200000",
			"paymentPeriod": "Monthly",
			"rentPaymentDay": "1st",
			"rentPaymentMonth": "January",
			"rentDay": "Sunday",
			"initialState": {
			"agreement": {
			"agreementId": "5584",
			"agreementType": "Lease",
			"client": "Landlord",
			"currency": "NZD",
			"commercial": "Yes",
			"agreementMode": "Inactive",
			"commencementDate": "1275307200000",
			"expiryDate": "1338379200000",
			"totalAnnualRent": "0.00",
			"rent": {
			"premises": {
			"annual": "0.00",
			"monthly": "0.00",
			"weekly": "0.00"
			},
			"carparks": {
			"annual": "0.00",
			"monthly": "0.00",
			"weekly": "0.00"
			}
			},
			"paymentStartDate": "1275307200000",
			"paymentPeriod": "Monthly",
			"rentPaymentDay": "1st",
			"rentPaymentMonth": "January",
			"rentDay": "Sunday",
			"parties": {
			"Landlord": [
			  {
			"entityId": "436",
			"entityName": "Mr Fred Bloggs"
			}
			],
			"Tenant": [
			  {
			"entityId": "435",
			"entityName": "Test ltd This &amp; That &lt;script&gt;alert('!');&lt;/script&gt;"
			}
			],
			}
			}
			}
			},
			"relationships": {
			"properties": {
			"links": {
			"self": "/organisations/1/agreements/5584/relationships/properties/",
			"related": "/organisations/1/properties/"
			},
			"data": [
			  {
			"type": "properties",
			"id": "233"
			}
			],
			},
			"events": {
			"links": {
			"self": "/organisations/1/agreements/5584/relationships/events/",
			"related": "/organisations/1/events/"
			},
			"data": [
			  {
			"type": "events",
			"id": "5845"
			},
			  {
			"type": "events",
			"id": "5846"
			}
			],
			},
			"organisations": {
			"links": {
			"self": "/organisations/1/agreements/5584/relationships/organisations/",
			"related": "/organisations/"
			},
			"data": [
			  {
			"type": "organisations",
			"id": "1"
			}
			],
			},
			"parties": {
			"Landlord": {
			"links": {
			"self": "/organisations/1/agreements/5584/relationships/parties/Landlord/",
			"related": "/organisations/1/entities/"
			},
			"data": [
			  {
			"type": "entities",
			"id": "436"
			}
			],
			},
			"Tenant": {
			"links": {
			"self": "/organisations/1/agreements/5584/relationships/parties/Tenant/",
			"related": "/organisations/1/entities/"
			},
			"data": [
			  {
			"type": "entities",
			"id": "435"
			}
			],
			}
			}
			}
			},
			  {
			"type": "agreements",
			"id": 8455,
			"attributes": {
			"insertedDate": 1432504540000,
			"insertedBy": 2,
			"updatedDate": 1439622385000,
			"knownAs": "Another create deed test",
			"internalReferences": [],
			"jurisdiction": "New Zealand",
			"agreementType": "Lease",
			"client": "Landlord",
			"currency": "NZD",
			"commercial": "Yes",
			"agreementMode": "Inactive",
			"commencementDate": "1433073600000",
			"totalAnnualRent": "0.00",
			"rent": {
			"premises": {
			"annual": "0.00",
			"monthly": "0.00",
			"weekly": "0.00"
			},
			"carparks": {
			"annual": "0.00",
			"monthly": "0.00",
			"weekly": "0.00"
			}
			},
			"initialState": {
			"agreement": {
			"agreementId": "8455",
			"agreementType": "Lease",
			"client": "Landlord",
			"currency": "NZD",
			"commercial": "Yes",
			"agreementMode": "Inactive",
			"commencementDate": "1433073600000",
			"totalAnnualRent": "0.00",
			"rent": {
			"premises": {
			"annual": "0.00",
			"monthly": "0.00",
			"weekly": "0.00"
			},
			"carparks": {
			"annual": "0.00",
			"monthly": "0.00",
			"weekly": "0.00"
			}
			},
			"parties": {}
			}
			}
			},
			"relationships": {
			"events": {
			"links": {
			"self": "/organisations/1/agreements/8455/relationships/events/",
			"related": "/organisations/1/events/"
			},
			"data": [
			  {
			"type": "events",
			"id": "55552"
			}
			],
			},
			"organisations": {
			"links": {
			"self": "/organisations/1/agreements/8455/relationships/organisations/",
			"related": "/organisations/"
			},
			"data": [
			  {
			"type": "organisations",
			"id": "1"
			}
			],
			}
			}
			},
			  {
			"type": "agreements",
			"id": 8454,
			"attributes": {
			"insertedDate": 1432503919000,
			"insertedBy": 2,
			"updatedDate": 1461044426000,
			"knownAs": "Commencement test",
			"internalReferences": [],
			"jurisdiction": "New Zealand",
			"agreementType": "Lease",
			"client": "Landlord",
			"currency": "NZD",
			"commercial": "Yes",
			"agreementMode": "Active",
			"commencementDate": "1430395200000",
			"totalAnnualRent": "0.00",
			"rent": {
			"premises": {
			"annual": "0.00",
			"monthly": "0.00",
			"weekly": "0.00"
			},
			"carparks": {
			"annual": "0.00",
			"monthly": "0.00",
			"weekly": "0.00"
			}
			},
			"paymentStartDate": "1430395200000",
			"paymentPeriod": "Monthly",
			"rentPaymentDay": "1st",
			"rentPaymentMonth": "January",
			"rentDay": "Sunday",
			"taxation": "Plus Tax",
			"initialState": {
			"agreement": {
			"agreementId": "8454",
			"agreementType": "Lease",
			"client": "Landlord",
			"currency": "NZD",
			"commercial": "Yes",
			"agreementMode": "Active",
			"commencementDate": "1430395200000",
			"totalAnnualRent": "0.00",
			"rent": {
			"premises": {
			"annual": "0.00",
			"monthly": "0.00",
			"weekly": "0.00"
			},
			"carparks": {
			"annual": "0.00",
			"monthly": "0.00",
			"weekly": "0.00"
			}
			},
			"paymentStartDate": "1430395200000",
			"paymentPeriod": "Monthly",
			"rentPaymentDay": "1st",
			"rentPaymentMonth": "January",
			"rentDay": "Sunday",
			"taxation": "Plus Tax",
			"parties": {
			"Landlord": [
			  {
			"entityId": "7114",
			"entityName": "A new company"
			}
			],
			"Tenant": [
			  {
			"entityId": "7115",
			"entityName": "A new trust"
			}
			],
			}
			}
			}
			},
			"relationships": {
			"properties": {
			"links": {
			"self": "/organisations/1/agreements/8454/relationships/properties/",
			"related": "/organisations/1/properties/"
			},
			"data": [
			  {
			"type": "properties",
			"id": "1867"
			}
			],
			},
			"events": {
			"links": {
			"self": "/organisations/1/agreements/8454/relationships/events/",
			"related": "/organisations/1/events/"
			},
			"data": [
			  {
			"type": "events",
			"id": "55551"
			}
			],
			},
			"organisations": {
			"links": {
			"self": "/organisations/1/agreements/8454/relationships/organisations/",
			"related": "/organisations/"
			},
			"data": [
			  {
			"type": "organisations",
			"id": "1"
			}
			],
			},
			"parties": {
			"Landlord": {
			"links": {
			"self": "/organisations/1/agreements/8454/relationships/parties/Landlord/",
			"related": "/organisations/1/entities/"
			},
			"data": [
			  {
			"type": "entities",
			"id": "7114"
			}
			],
			},
			"Tenant": {
			"links": {
			"self": "/organisations/1/agreements/8454/relationships/parties/Tenant/",
			"related": "/organisations/1/entities/"
			},
			"data": [
			  {
			"type": "entities",
			"id": "7115"
			}
			],
			}
			}
			}
			},
			  {
			"type": "agreements",
			"id": 8346,
			"attributes": {
			"insertedDate": 1431639387000,
			"insertedBy": 2,
			"updatedDate": 1461044426000,
			"knownAs": "DAVE doc test lease",
			"internalReferences": [],
			"jurisdiction": "New Zealand",
			"agreementType": "Lease",
			"client": "Landlord",
			"currency": "NZD",
			"commercial": "Yes",
			"agreementMode": "Active",
			"commencementDate": "1272628800000",
			"expiryDate": "1651233600000",
			"totalAnnualRent": "5500.00",
			"rent": {
			"premises": {
			"annual": "5500.00",
			"monthly": "458.33",
			"weekly": "105.77"
			},
			"carparks": {
			"annual": "0.00",
			"monthly": "0.00",
			"weekly": "0.00"
			}
			},
			"paymentStartDate": "1430395200000",
			"paymentPeriod": "Monthly",
			"rentPaymentDay": "1st",
			"rentPaymentMonth": "January",
			"rentDay": "Sunday",
			"taxation": "Plus Tax",
			"initialState": {
			"agreement": {
			"agreementId": "8346",
			"agreementType": "Lease",
			"client": "Landlord",
			"currency": "NZD",
			"commercial": "Yes",
			"agreementMode": "Active",
			"commencementDate": "1272628800000",
			"expiryDate": "1651233600000",
			"totalAnnualRent": "5500.00",
			"rent": {
			"premises": {
			"annual": "5500.00",
			"monthly": "458.33",
			"weekly": "105.77"
			},
			"carparks": {
			"annual": "0.00",
			"monthly": "0.00",
			"weekly": "0.00"
			}
			},
			"paymentStartDate": "1430395200000",
			"paymentPeriod": "Monthly",
			"rentPaymentDay": "1st",
			"rentPaymentMonth": "January",
			"rentDay": "Sunday",
			"taxation": "Plus Tax",
			"parties": {
			"Guarantor": [
			  {
			"entityId": "754",
			"entityName": "Mr Explorer Ltd"
			}
			],
			"Landlord": [
			  {
			"entityId": "7114",
			"entityName": "A new company"
			}
			],
			"Tenant": [
			  {
			"entityId": "7115",
			"entityName": "A new trust"
			},
			  {
			"entityId": 7476,
			"entityName": "Another Company"
			}
			],
			}
			}
			}
			},
			"relationships": {
			"properties": {
			"links": {
			"self": "/organisations/1/agreements/8346/relationships/properties/",
			"related": "/organisations/1/properties/"
			},
			"data": [
			  {
			"type": "properties",
			"id": "4995"
			}
			],
			},
			"events": {
			"links": {
			"self": "/organisations/1/agreements/8346/relationships/events/",
			"related": "/organisations/1/events/"
			},
			"data": [
			  {
			"type": "events",
			"id": "53104"
			},
			  {
			"type": "events",
			"id": "53105"
			},
			  {
			"type": "events",
			"id": "53106"
			},
			  {
			"type": "events",
			"id": "53108"
			},
			  {
			"type": "events",
			"id": "53109"
			},
			  {
			"type": "events",
			"id": "53110"
			},
			  {
			"type": "events",
			"id": "53112"
			},
			  {
			"type": "events",
			"id": "53113"
			},
			  {
			"type": "events",
			"id": "103225"
			},
			  {
			"type": "events",
			"id": "103582"
			}
			],
			},
			"organisations": {
			"links": {
			"self": "/organisations/1/agreements/8346/relationships/organisations/",
			"related": "/organisations/"
			},
			"data": [
			  {
			"type": "organisations",
			"id": "1"
			}
			],
			},
			"parties": {
			"Guarantor": {
			"links": {
			"self": "/organisations/1/agreements/8346/relationships/parties/Guarantor/",
			"related": "/organisations/1/entities/"
			},
			"data": [
			  {
			"type": "entities",
			"id": "754"
			}
			],
			},
			"Landlord": {
			"links": {
			"self": "/organisations/1/agreements/8346/relationships/parties/Landlord/",
			"related": "/organisations/1/entities/"
			},
			"data": [
			  {
			"type": "entities",
			"id": "7114"
			}
			],
			},
			"Tenant": {
			"links": {
			"self": "/organisations/1/agreements/8346/relationships/parties/Tenant/",
			"related": "/organisations/1/entities/"
			},
			"data": [
			  {
			"type": "entities",
			"id": "7115"
			},
			  {
			"type": "entities",
			"id": 7476
			}
			],
			}
			}
			}
			},
			  {
			"type": "agreements",
			"id": 8351,
			"attributes": {
			"insertedDate": 1431643046000,
			"insertedBy": 2,
			"updatedDate": 1467772401000,
			"updatedBy": 2,
			"knownAs": "DAVE doc test license",
			"legalDescription": "All the areas",
			"internalReferences": [],
			"jurisdiction": "New Zealand",
			"agreementType": "License",
			"client": "Licensor",
			"currency": "NZD",
			"commercial": "Yes",
			"agreementMode": "Active",
			"commencementDate": "1272628800000",
			"expiryDate": "1461931200000",
			"totalAnnualRent": "7000.00",
			"rent": {
			"premises": {
			"annual": "7000.00",
			"monthly": "583.33",
			"weekly": "134.62"
			},
			"carparks": {
			"annual": "0.00",
			"monthly": "0.00",
			"weekly": "0.00"
			}
			},
			"paymentStartDate": "1272628800000",
			"paymentPeriod": "Monthly",
			"rentPaymentDay": "1st",
			"rentPaymentMonth": "January",
			"rentDay": "Sunday",
			"taxation": "Plus Tax",
			"businessUse": "A coffee stand to dispense hot and cold beverages and food.",
			"initialState": {
			"agreement": {
			"agreementId": "8351",
			"agreementType": "License",
			"client": "Licensor",
			"currency": "NZD",
			"commercial": "Yes",
			"agreementMode": "Active",
			"commencementDate": "1272628800000",
			"expiryDate": "1461931200000",
			"totalAnnualRent": "7000.00",
			"rent": {
			"premises": {
			"annual": "7000.00",
			"monthly": "583.33",
			"weekly": "134.62"
			},
			"carparks": {
			"annual": "0.00",
			"monthly": "0.00",
			"weekly": "0.00"
			}
			},
			"paymentStartDate": "1272628800000",
			"paymentPeriod": "Monthly",
			"rentPaymentDay": "1st",
			"rentPaymentMonth": "January",
			"rentDay": "Sunday",
			"taxation": "Plus Tax",
			"businessUse": "A coffee stand to dispense hot and cold beverages and food.",
			"parties": {
			"Licensor": [
			  {
			"entityId": "7115",
			"entityName": "A new trust"
			}
			],
			"Licensee": [
			  {
			"entityId": "7114",
			"entityName": "A new company"
			}
			],
			"Guarantor": [
			  {
			"entityId": "7170",
			"entityName": "New Trust"
			}
			],
			}
			}
			}
			},
			"relationships": {
			"properties": {
			"links": {
			"self": "/organisations/1/agreements/8351/relationships/properties/",
			"related": "/organisations/1/properties/"
			},
			"data": [
			  {
			"type": "properties",
			"id": "4987"
			},
			  {
			"type": "properties",
			"id": "1799"
			}
			],
			},
			"events": {
			"links": {
			"self": "/organisations/1/agreements/8351/relationships/events/",
			"related": "/organisations/1/events/"
			},
			"data": [
			  {
			"type": "events",
			"id": "53148"
			},
			  {
			"type": "events",
			"id": "53149"
			},
			  {
			"type": "events",
			"id": "53150"
			},
			  {
			"type": "events",
			"id": "53151"
			},
			  {
			"type": "events",
			"id": "53152"
			},
			  {
			"type": "events",
			"id": "53154"
			},
			  {
			"type": "events",
			"id": "53155"
			}
			],
			},
			"organisations": {
			"links": {
			"self": "/organisations/1/agreements/8351/relationships/organisations/",
			"related": "/organisations/"
			},
			"data": [
			  {
			"type": "organisations",
			"id": "1"
			}
			],
			},
			"parties": {
			"Licensor": {
			"links": {
			"self": "/organisations/1/agreements/8351/relationships/parties/Licensor/",
			"related": "/organisations/1/entities/"
			},
			"data": [
			  {
			"type": "entities",
			"id": "7115"
			}
			],
			},
			"Licensee": {
			"links": {
			"self": "/organisations/1/agreements/8351/relationships/parties/Licensee/",
			"related": "/organisations/1/entities/"
			},
			"data": [
			  {
			"type": "entities",
			"id": "7114"
			}
			],
			},
			"Guarantor": {
			"links": {
			"self": "/organisations/1/agreements/8351/relationships/parties/Guarantor/",
			"related": "/organisations/1/entities/"
			},
			"data": [
			  {
			"type": "entities",
			"id": "7170"
			}
			],
			}
			}
			}
			},
			  {
			"type": "agreements",
			"id": 8353,
			"attributes": {
			"insertedDate": 1431646604000,
			"insertedBy": 2,
			"updatedDate": 1461044426000,
			"knownAs": "DAVE doc test sublease",
			"internalReferences": [],
			"jurisdiction": "New Zealand",
			"agreementType": "Sublease",
			"client": "HeadLessor",
			"currency": "NZD",
			"commercial": "Yes",
			"agreementMode": "Active",
			"commencementDate": "1272628800000",
			"expiryDate": "1651233600000",
			"totalAnnualRent": "60000.00",
			"rent": {
			"premises": {
			"annual": "60000.00",
			"monthly": "5000.00",
			"weekly": "1153.85"
			},
			"carparks": {
			"annual": "0.00",
			"monthly": "0.00",
			"weekly": "0.00"
			}
			},
			"paymentStartDate": "1272628800000",
			"paymentPeriod": "Monthly",
			"rentPaymentDay": "1st",
			"rentPaymentMonth": "January",
			"rentDay": "Sunday",
			"taxation": "Plus Tax",
			"initialState": {
			"agreement": {
			"agreementId": "8353",
			"agreementType": "Sublease",
			"client": "HeadLessor",
			"currency": "NZD",
			"commercial": "Yes",
			"agreementMode": "Active",
			"commencementDate": "1272628800000",
			"expiryDate": "1651233600000",
			"totalAnnualRent": "60000.00",
			"rent": {
			"premises": {
			"annual": "60000.00",
			"monthly": "5000.00",
			"weekly": "1153.85"
			},
			"carparks": {
			"annual": "0.00",
			"monthly": "0.00",
			"weekly": "0.00"
			}
			},
			"paymentStartDate": "1272628800000",
			"paymentPeriod": "Monthly",
			"rentPaymentDay": "1st",
			"rentPaymentMonth": "January",
			"rentDay": "Sunday",
			"taxation": "Plus Tax",
			"parties": {
			"Head_Lessor": [
			  {
			"entityId": "7114",
			"entityName": "A new company"
			}
			],
			"Sub_Lessor": [
			  {
			"entityId": "7476",
			"entityName": "Another Company"
			}
			],
			"Sub_Lessee": [
			  {
			"entityId": "751",
			"entityName": "fred corp"
			}
			],
			"Guarantor": [
			  {
			"entityId": "7168",
			"entityName": "New Company"
			}
			],
			}
			}
			}
			},
			"relationships": {
			"properties": {
			"links": {
			"self": "/organisations/1/agreements/8353/relationships/properties/",
			"related": "/organisations/1/properties/"
			},
			"data": [
			  {
			"type": "properties",
			"id": "4988"
			},
			  {
			"type": "properties",
			"id": "1801"
			}
			],
			},
			"events": {
			"links": {
			"self": "/organisations/1/agreements/8353/relationships/events/",
			"related": "/organisations/1/events/"
			},
			"data": [
			  {
			"type": "events",
			"id": "53387"
			},
			  {
			"type": "events",
			"id": "53388"
			},
			  {
			"type": "events",
			"id": "53389"
			},
			  {
			"type": "events",
			"id": "53390"
			},
			  {
			"type": "events",
			"id": "53391"
			},
			  {
			"type": "events",
			"id": "53392"
			},
			  {
			"type": "events",
			"id": "53393"
			},
			  {
			"type": "events",
			"id": "53395"
			},
			  {
			"type": "events",
			"id": "53396"
			}
			],
			},
			"organisations": {
			"links": {
			"self": "/organisations/1/agreements/8353/relationships/organisations/",
			"related": "/organisations/"
			},
			"data": [
			  {
			"type": "organisations",
			"id": "1"
			}
			],
			},
			"parties": {
			"Head_Lessor": {
			"links": {
			"self": "/organisations/1/agreements/8353/relationships/parties/Head_Lessor/",
			"related": "/organisations/1/entities/"
			},
			"data": [
			  {
			"type": "entities",
			"id": "7114"
			}
			],
			},
			"Sub_Lessor": {
			"links": {
			"self": "/organisations/1/agreements/8353/relationships/parties/Sub_Lessor/",
			"related": "/organisations/1/entities/"
			},
			"data": [
			  {
			"type": "entities",
			"id": "7476"
			}
			],
			},
			"Sub_Lessee": {
			"links": {
			"self": "/organisations/1/agreements/8353/relationships/parties/Sub_Lessee/",
			"related": "/organisations/1/entities/"
			},
			"data": [
			  {
			"type": "entities",
			"id": "751"
			}
			],
			},
			"Guarantor": {
			"links": {
			"self": "/organisations/1/agreements/8353/relationships/parties/Guarantor/",
			"related": "/organisations/1/entities/"
			},
			"data": [
			  {
			"type": "entities",
			"id": "7168"
			}
			],
			}
			}
			}
			},
			  {
			"type": "agreements",
			"id": 8112,
			"attributes": {
			"insertedDate": 1427153393000,
			"insertedBy": 2,
			"updatedDate": 1439622370000,
			"knownAs": "DAVES",
			"internalReferences": [],
			"jurisdiction": "New Zealand",
			"agreementType": "Lease",
			"client": "Landlord",
			"currency": "NZD",
			"commercial": "Yes",
			"agreementMode": "Active",
			"commencementDate": "954504000000",
			"expiryDate": "1143720000000",
			"totalAnnualRent": "0.00",
			"rent": {
			"premises": {
			"annual": "0.00",
			"monthly": "0.00",
			"weekly": "0.00"
			},
			"carparks": {
			"annual": "0.00",
			"monthly": "0.00",
			"weekly": "0.00"
			}
			},
			"initialState": {
			"agreement": {
			"agreementId": "8112",
			"agreementType": "Lease",
			"client": "Landlord",
			"currency": "NZD",
			"commercial": "Yes",
			"agreementMode": "Active",
			"commencementDate": "954504000000",
			"expiryDate": "1143720000000",
			"totalAnnualRent": "0.00",
			"rent": {
			"premises": {
			"annual": "0.00",
			"monthly": "0.00",
			"weekly": "0.00"
			},
			"carparks": {
			"annual": "0.00",
			"monthly": "0.00",
			"weekly": "0.00"
			}
			},
			"parties": {
			"Tenant": [
			  {
			"entityId": "215",
			"entityName": "Mr faslkdfm lfkmasdlkf lflafm"
			}
			],
			"Landlord": [
			  {
			"entityId": "6437",
			"entityName": "Mel"
			}
			],
			"Guarantor": [
			  {
			"entityId": "6949",
			"entityName": "Dr Death"
			}
			],
			}
			}
			}
			},
			"relationships": {
			"notes": {
			"links": {
			"self": "/organisations/1/agreements/8112/relationships/notes/",
			"related": "/organisations/1/notes/"
			},
			"data": [
			  {
			"type": "notes",
			"id": 129
			},
			  {
			"type": "notes",
			"id": 128
			}
			],
			},
			"events": {
			"links": {
			"self": "/organisations/1/agreements/8112/relationships/events/",
			"related": "/organisations/1/events/"
			},
			"data": [
			  {
			"type": "events",
			"id": "45318"
			},
			  {
			"type": "events",
			"id": "45319"
			},
			  {
			"type": "events",
			"id": "45320"
			},
			  {
			"type": "events",
			"id": "45321"
			},
			  {
			"type": "events",
			"id": "45322"
			},
			  {
			"type": "events",
			"id": "45323"
			},
			  {
			"type": "events",
			"id": "45324"
			}
			],
			},
			"organisations": {
			"links": {
			"self": "/organisations/1/agreements/8112/relationships/organisations/",
			"related": "/organisations/"
			},
			"data": [
			  {
			"type": "organisations",
			"id": "1"
			}
			],
			},
			"parties": {
			"Tenant": {
			"links": {
			"self": "/organisations/1/agreements/8112/relationships/parties/Tenant/",
			"related": "/organisations/1/entities/"
			},
			"data": [
			  {
			"type": "entities",
			"id": "215"
			}
			],
			},
			"Landlord": {
			"links": {
			"self": "/organisations/1/agreements/8112/relationships/parties/Landlord/",
			"related": "/organisations/1/entities/"
			},
			"data": [
			  {
			"type": "entities",
			"id": "6437"
			}
			],
			},
			"Guarantor": {
			"links": {
			"self": "/organisations/1/agreements/8112/relationships/parties/Guarantor/",
			"related": "/organisations/1/entities/"
			},
			"data": [
			  {
			"type": "entities",
			"id": "6949"
			}
			],
			}
			}
			}
			},
			  {
			"type": "agreements",
			"id": 9166,
			"attributes": {
			"insertedDate": 1437482499000,
			"insertedBy": 2,
			"updatedDate": 1461044426000,
			"knownAs": "DAev post live test",
			"internalReferences": [],
			"jurisdiction": "New Zealand",
			"agreementType": "Lease",
			"client": "Landlord",
			"currency": "NZD",
			"commercial": "Yes",
			"agreementMode": "Inactive",
			"totalAnnualRent": "0.00",
			"rent": {
			"premises": {
			"annual": "0.00",
			"monthly": "0.00",
			"weekly": "0.00"
			},
			"carparks": {
			"annual": "0.00",
			"monthly": "0.00",
			"weekly": "0.00"
			}
			},
			"paymentStartDate": "1420027200000",
			"paymentPeriod": "Monthly",
			"rentPaymentDay": "1st",
			"rentPaymentMonth": "January",
			"rentDay": "Sunday",
			"taxation": "Plus Tax",
			"initialState": {
			"agreement": {
			"agreementId": "9166",
			"agreementType": "Lease",
			"client": "Landlord",
			"currency": "NZD",
			"commercial": "Yes",
			"agreementMode": "Inactive",
			"totalAnnualRent": "0.00",
			"rent": {
			"premises": {
			"annual": "0.00",
			"monthly": "0.00",
			"weekly": "0.00"
			},
			"carparks": {
			"annual": "0.00",
			"monthly": "0.00",
			"weekly": "0.00"
			}
			},
			"paymentStartDate": "1420027200000",
			"paymentPeriod": "Monthly",
			"rentPaymentDay": "1st",
			"rentPaymentMonth": "January",
			"rentDay": "Sunday",
			"taxation": "Plus Tax",
			"parties": {
			"Landlord": [
			  {
			"entityId": "6945",
			"entityName": "Captain Planet"
			}
			],
			}
			}
			}
			},
			"relationships": {
			"properties": {
			"links": {
			"self": "/organisations/1/agreements/9166/relationships/properties/",
			"related": "/organisations/1/properties/"
			},
			"data": [
			  {
			"type": "properties",
			"id": "2352"
			}
			],
			},
			"organisations": {
			"links": {
			"self": "/organisations/1/agreements/9166/relationships/organisations/",
			"related": "/organisations/"
			},
			"data": [
			  {
			"type": "organisations",
			"id": "1"
			}
			],
			},
			"parties": {
			"Landlord": {
			"links": {
			"self": "/organisations/1/agreements/9166/relationships/parties/Landlord/",
			"related": "/organisations/1/entities/"
			},
			"data": [
			  {
			"type": "entities",
			"id": "6945"
			}
			],
			}
			}
			}
			},
			  {
			"type": "agreements",
			"id": 8014,
			"attributes": {
			"insertedDate": 1424831525000,
			"insertedBy": 2,
			"updatedDate": 1461044425000,
			"knownAs": "DAve pdf test",
			"internalReferences": [],
			"jurisdiction": "New Zealand",
			"agreementType": "Lease",
			"client": "Landlord",
			"currency": "NZD",
			"commercial": "Yes",
			"agreementMode": "Active",
			"commencementDate": "1356955200000",
			"expiryDate": "1451476800000",
			"totalAnnualRent": "0.00",
			"rent": {
			"premises": {
			"annual": "0.00",
			"monthly": "0.00",
			"weekly": "0.00"
			},
			"carparks": {
			"annual": "0.00",
			"monthly": "0.00",
			"weekly": "0.00"
			}
			},
			"paymentStartDate": "1356955200000",
			"paymentPeriod": "Monthly",
			"rentPaymentDay": "1st",
			"rentPaymentMonth": "January",
			"rentDay": "Sunday",
			"taxation": "Plus Tax",
			"initialState": {
			"agreement": {
			"agreementId": "8014",
			"agreementType": "Lease",
			"client": "Landlord",
			"currency": "NZD",
			"commercial": "Yes",
			"agreementMode": "Active",
			"commencementDate": "1356955200000",
			"expiryDate": "1451476800000",
			"totalAnnualRent": "0.00",
			"rent": {
			"premises": {
			"annual": "0.00",
			"monthly": "0.00",
			"weekly": "0.00"
			},
			"carparks": {
			"annual": "0.00",
			"monthly": "0.00",
			"weekly": "0.00"
			}
			},
			"paymentStartDate": "1356955200000",
			"paymentPeriod": "Monthly",
			"rentPaymentDay": "1st",
			"rentPaymentMonth": "January",
			"rentDay": "Sunday",
			"taxation": "Plus Tax",
			"parties": {
			"Landlord": [
			  {
			"entityId": "517",
			"entityName": "Mr ASB"
			}
			],
			"Tenant": [
			  {
			"entityId": "754",
			"entityName": "Mr Explorer Ltd"
			}
			],
			}
			}
			}
			},
			"relationships": {
			"properties": {
			"links": {
			"self": "/organisations/1/agreements/8014/relationships/properties/",
			"related": "/organisations/1/properties/"
			},
			"data": [
			  {
			"type": "properties",
			"id": "1618"
			}
			],
			},
			"events": {
			"links": {
			"self": "/organisations/1/agreements/8014/relationships/events/",
			"related": "/organisations/1/events/"
			},
			"data": [
			  {
			"type": "events",
			"id": "40226"
			},
			  {
			"type": "events",
			"id": "40227"
			},
			  {
			"type": "events",
			"id": "40228"
			},
			  {
			"type": "events",
			"id": "40229"
			}
			],
			},
			"organisations": {
			"links": {
			"self": "/organisations/1/agreements/8014/relationships/organisations/",
			"related": "/organisations/"
			},
			"data": [
			  {
			"type": "organisations",
			"id": "1"
			}
			],
			},
			"parties": {
			"Landlord": {
			"links": {
			"self": "/organisations/1/agreements/8014/relationships/parties/Landlord/",
			"related": "/organisations/1/entities/"
			},
			"data": [
			  {
			"type": "entities",
			"id": "517"
			}
			],
			},
			"Tenant": {
			"links": {
			"self": "/organisations/1/agreements/8014/relationships/parties/Tenant/",
			"related": "/organisations/1/entities/"
			},
			"data": [
			  {
			"type": "entities",
			"id": "754"
			}
			],
			}
			}
			}
			},
			  {
			"type": "agreements",
			"id": 9513,
			"attributes": {
			"insertedDate": 1439626275000,
			"insertedBy": 2,
			"updatedDate": 1461044427000,
			"knownAs": "DAve work",
			"internalReferences": [],
			"jurisdiction": "New Zealand",
			"agreementType": "Lease",
			"client": "Landlord",
			"currency": "NZD",
			"commercial": "Yes",
			"agreementMode": "Active",
			"totalAnnualRent": "50000.00",
			"rent": {
			"premises": {
			"annual": "50000.00",
			"monthly": "4166.67",
			"weekly": "961.54"
			},
			"carparks": {
			"annual": "0.00",
			"monthly": "0.00",
			"weekly": "0.00"
			}
			},
			"paymentStartDate": "1280577600000",
			"paymentPeriod": "Monthly",
			"rentPaymentDay": "1st",
			"rentPaymentMonth": "January",
			"rentDay": "Sunday",
			"taxation": "Plus Tax",
			"initialState": {
			"agreement": {
			"agreementId": "9513",
			"agreementType": "Lease",
			"client": "Landlord",
			"currency": "NZD",
			"commercial": "Yes",
			"agreementMode": "Inactive",
			"totalAnnualRent": "50000.00",
			"rent": {
			"premises": {
			"annual": "50000.00",
			"monthly": "4166.67",
			"weekly": "961.54"
			},
			"carparks": {
			"annual": "0.00",
			"monthly": "0.00",
			"weekly": "0.00"
			}
			},
			"paymentStartDate": "1280577600000",
			"paymentPeriod": "Monthly",
			"rentPaymentDay": "1st",
			"rentPaymentMonth": "January",
			"rentDay": "Sunday",
			"taxation": "Plus Tax",
			"parties": {
			"Landlord": [
			  {
			"entityId": "7703",
			"entityName": "test dave"
			}
			],
			"Tenant": [
			  {
			"entityId": "454",
			"entityName": "wat wat ltd"
			}
			],
			}
			}
			},
			"commencementDate": "1280577600000",
			"expiryDate": "1532952000000"
			},
			"relationships": {
			"properties": {
			"links": {
			"self": "/organisations/1/agreements/9513/relationships/properties/",
			"related": "/organisations/1/properties/"
			},
			"data": [
			  {
			"type": "properties",
			"id": "2516"
			}
			],
			},
			"events": {
			"links": {
			"self": "/organisations/1/agreements/9513/relationships/events/",
			"related": "/organisations/1/events/"
			},
			"data": [
			  {
			"type": "events",
			"id": "88769"
			},
			  {
			"type": "events",
			"id": "88770"
			},
			  {
			"type": "events",
			"id": "88779"
			},
			  {
			"type": "events",
			"id": "88780"
			},
			  {
			"type": "events",
			"id": "88781"
			},
			  {
			"type": "events",
			"id": "88785"
			}
			],
			},
			"organisations": {
			"links": {
			"self": "/organisations/1/agreements/9513/relationships/organisations/",
			"related": "/organisations/"
			},
			"data": [
			  {
			"type": "organisations",
			"id": "1"
			}
			],
			},
			"parties": {
			"Landlord": {
			"links": {
			"self": "/organisations/1/agreements/9513/relationships/parties/Landlord/",
			"related": "/organisations/1/entities/"
			},
			"data": [
			  {
			"type": "entities",
			"id": "7703"
			}
			],
			},
			"Tenant": {
			"links": {
			"self": "/organisations/1/agreements/9513/relationships/parties/Tenant/",
			"related": "/organisations/1/entities/"
			},
			"data": [
			  {
			"type": "entities",
			"id": "454"
			}
			],
			}
			}
			}
			},
			  {
			"type": "agreements",
			"id": 8107,
			"attributes": {
			"insertedDate": 1427143975000,
			"insertedBy": 2,
			"updatedDate": 1461105380000,
			"knownAs": "DAves house",
			"internalReferences": [],
			"jurisdiction": "New Zealand",
			"agreementType": "Lease",
			"client": "Landlord",
			"currency": "NZD",
			"commercial": "Yes",
			"agreementMode": "Active",
			"commencementDate": "1427803200000",
			"totalAnnualRent": "0.00",
			"rent": {
			"premises": {
			"annual": "0.00",
			"monthly": "0.00",
			"weekly": "0.00"
			},
			"carparks": {
			"annual": "0.00",
			"monthly": "0.00",
			"weekly": "0.00"
			}
			},
			"paymentPeriod": "Monthly",
			"rentPaymentDay": "1st",
			"rentPaymentMonth": "January",
			"rentDay": "Sunday",
			"taxation": "Plus Tax",
			"initialState": {
			"agreement": {
			"agreementId": "8107",
			"agreementType": "Lease",
			"client": "Landlord",
			"currency": "NZD",
			"commercial": "Yes",
			"agreementMode": "Active",
			"commencementDate": "1427803200000",
			"totalAnnualRent": "0.00",
			"rent": {
			"premises": {
			"annual": "0.00",
			"monthly": "0.00",
			"weekly": "0.00"
			},
			"carparks": {
			"annual": "0.00",
			"monthly": "0.00",
			"weekly": "0.00"
			}
			},
			"paymentPeriod": "Monthly",
			"rentPaymentDay": "1st",
			"rentPaymentMonth": "January",
			"rentDay": "Sunday",
			"taxation": "Plus Tax",
			"parties": {}
			}
			}
			},
			"relationships": {
			"properties": {
			"links": {
			"self": "/organisations/1/agreements/8107/relationships/properties/",
			"related": "/organisations/1/properties/"
			},
			"data": [
			  {
			"type": "properties",
			"id": "1653"
			}
			],
			},
			"events": {
			"links": {
			"self": "/organisations/1/agreements/8107/relationships/events/",
			"related": "/organisations/1/events/"
			},
			"data": [
			  {
			"type": "events",
			"id": "45013"
			}
			],
			},
			"organisations": {
			"links": {
			"self": "/organisations/1/agreements/8107/relationships/organisations/",
			"related": "/organisations/"
			},
			"data": [
			  {
			"type": "organisations",
			"id": "1"
			}
			],
			}
			}
			},
			  {
			"type": "agreements",
			"id": 82130,
			"attributes": {
			"insertedDate": 1452653183000,
			"insertedBy": 2,
			"updatedDate": 1461044426000,
			"knownAs": "Darfting notes test",
			"internalReferences": [],
			"jurisdiction": "New Zealand",
			"agreementType": "Lease",
			"client": "Landlord",
			"currency": "NZD",
			"commercial": "Yes",
			"agreementMode": "Active",
			"totalAnnualRent": "6000.00",
			"rent": {
			"premises": {
			"annual": "6000.00",
			"monthly": "500.00",
			"weekly": "115.38"
			},
			"carparks": {
			"annual": "0.00",
			"monthly": "0.00",
			"weekly": "0.00"
			}
			},
			"paymentStartDate": "1262260800000",
			"paymentPeriod": "Monthly",
			"rentPaymentDay": "1st",
			"rentPaymentMonth": "January",
			"rentDay": "Sunday",
			"taxation": "Plus Tax",
			"initialState": {
			"agreement": {
			"agreementId": "82130",
			"agreementType": "Lease",
			"client": "Landlord",
			"currency": "NZD",
			"commercial": "Yes",
			"agreementMode": "Inactive",
			"totalAnnualRent": "6000.00",
			"rent": {
			"premises": {
			"annual": "6000.00",
			"monthly": "500.00",
			"weekly": "115.38"
			},
			"carparks": {
			"annual": "0.00",
			"monthly": "0.00",
			"weekly": "0.00"
			}
			},
			"paymentStartDate": "1262260800000",
			"paymentPeriod": "Monthly",
			"rentPaymentDay": "1st",
			"rentPaymentMonth": "January",
			"rentDay": "Sunday",
			"taxation": "Plus Tax",
			"parties": {
			"Landlord": [
			  {
			"entityId": "7170",
			"entityName": "New Trust"
			}
			],
			"Tenant": [
			  {
			"entityId": "754",
			"entityName": "Mr Explorer Ltd"
			}
			],
			}
			}
			},
			"commencementDate": "1262260800000",
			"expiryDate": "1577707200000"
			},
			"relationships": {
			"properties": {
			"links": {
			"self": "/organisations/1/agreements/82130/relationships/properties/",
			"related": "/organisations/1/properties/"
			},
			"data": [
			  {
			"type": "properties",
			"id": "3697"
			}
			],
			},
			"events": {
			"links": {
			"self": "/organisations/1/agreements/82130/relationships/events/",
			"related": "/organisations/1/events/"
			},
			"data": [
			  {
			"type": "events",
			"id": "128323"
			},
			  {
			"type": "events",
			"id": "128324"
			},
			  {
			"type": "events",
			"id": "128326"
			},
			  {
			"type": "events",
			"id": "128328"
			},
			  {
			"type": "events",
			"id": "128330"
			},
			  {
			"type": "events",
			"id": "128331"
			},
			  {
			"type": "events",
			"id": "128333"
			},
			  {
			"type": "events",
			"id": "128335"
			}
			],
			},
			"organisations": {
			"links": {
			"self": "/organisations/1/agreements/82130/relationships/organisations/",
			"related": "/organisations/"
			},
			"data": [
			  {
			"type": "organisations",
			"id": "1"
			}
			],
			},
			"parties": {
			"Landlord": {
			"links": {
			"self": "/organisations/1/agreements/82130/relationships/parties/Landlord/",
			"related": "/organisations/1/entities/"
			},
			"data": [
			  {
			"type": "entities",
			"id": "7170"
			}
			],
			},
			"Tenant": {
			"links": {
			"self": "/organisations/1/agreements/82130/relationships/parties/Tenant/",
			"related": "/organisations/1/entities/"
			},
			"data": [
			  {
			"type": "entities",
			"id": "754"
			}
			],
			}
			}
			}
			},
			  {
			"type": "agreements",
			"id": 8452,
			"attributes": {
			"insertedDate": 1432449437000,
			"insertedBy": 2,
			"updatedDate": 1461044426000,
			"knownAs": "Dave test 2405",
			"internalReferences": [
			  "sfsd"
			],
			"jurisdiction": "New Zealand",
			"agreementType": "Lease",
			"client": "Landlord",
			"currency": "NZD",
			"commercial": "Yes",
			"agreementMode": "Inactive",
			"commencementDate": "1396267200000",
			"expiryDate": "1711800000000",
			"totalAnnualRent": "60000.00",
			"rent": {
			"premises": {
			"annual": "60000.00",
			"monthly": "5000.00",
			"weekly": "1153.85"
			},
			"carparks": {
			"annual": "0.00",
			"monthly": "0.00",
			"weekly": "0.00"
			}
			},
			"paymentStartDate": "1396267200000",
			"paymentPeriod": "Monthly",
			"rentPaymentDay": "1st",
			"rentPaymentMonth": "January",
			"rentDay": "Sunday",
			"taxation": "Plus Tax",
			"initialState": {
			"agreement": {
			"agreementId": "8452",
			"agreementType": "Lease",
			"client": "Landlord",
			"currency": "NZD",
			"commercial": "Yes",
			"agreementMode": "Inactive",
			"commencementDate": "1396267200000",
			"expiryDate": "1711800000000",
			"totalAnnualRent": "60000.00",
			"rent": {
			"premises": {
			"annual": "60000.00",
			"monthly": "5000.00",
			"weekly": "1153.85"
			},
			"carparks": {
			"annual": "0.00",
			"monthly": "0.00",
			"weekly": "0.00"
			}
			},
			"paymentStartDate": "1396267200000",
			"paymentPeriod": "Monthly",
			"rentPaymentDay": "1st",
			"rentPaymentMonth": "January",
			"rentDay": "Sunday",
			"taxation": "Plus Tax",
			"parties": {
			"Landlord": [
			  {
			"entityId": "7703",
			"entityName": "test dave"
			}
			],
			}
			}
			}
			},
			"relationships": {
			"properties": {
			"links": {
			"self": "/organisations/1/agreements/8452/relationships/properties/",
			"related": "/organisations/1/properties/"
			},
			"data": [
			  {
			"type": "properties",
			"id": "5003"
			},
			  {
			"type": "properties",
			"id": "1866"
			}
			],
			},
			"events": {
			"links": {
			"self": "/organisations/1/agreements/8452/relationships/events/",
			"related": "/organisations/1/events/"
			},
			"data": [
			  {
			"type": "events",
			"id": "55509"
			},
			  {
			"type": "events",
			"id": "55510"
			},
			  {
			"type": "events",
			"id": "55512"
			},
			  {
			"type": "events",
			"id": "55513"
			},
			  {
			"type": "events",
			"id": "55515"
			},
			  {
			"type": "events",
			"id": "55517"
			},
			  {
			"type": "events",
			"id": "55518"
			},
			  {
			"type": "events",
			"id": "55520"
			},
			  {
			"type": "events",
			"id": "55521"
			},
			  {
			"type": "events",
			"id": "55523"
			},
			  {
			"type": "events",
			"id": "55524"
			}
			],
			},
			"organisations": {
			"links": {
			"self": "/organisations/1/agreements/8452/relationships/organisations/",
			"related": "/organisations/"
			},
			"data": [
			  {
			"type": "organisations",
			"id": "1"
			}
			],
			},
			"parties": {
			"Landlord": {
			"links": {
			"self": "/organisations/1/agreements/8452/relationships/parties/Landlord/",
			"related": "/organisations/1/entities/"
			},
			"data": [
			  {
			"type": "entities",
			"id": "7703"
			}
			],
			}
			},
			"notFollowing": {
			"users": {
			"links": {
			"self": "/organisations/1/agreements/8452/relationships/notFollowing/users/",
			"related": "/users/"
			},
			"data": [
			  {
			"type": "users",
			"id": "4"
			},
			  {
			"type": "users",
			"id": "6"
			},
			  {
			"type": "users",
			"id": "8"
			},
			  {
			"type": "users",
			"id": "58"
			},
			  {
			"type": "users",
			"id": "59"
			},
			  {
			"type": "users",
			"id": "60"
			},
			  {
			"type": "users",
			"id": "226"
			}
			],
			}
			}
			}
			},
			  {
			"type": "agreements",
			"id": 9250,
			"attributes": {
			"insertedDate": 1438202817000,
			"insertedBy": 2,
			"updatedDate": 1461044426000,
			"knownAs": "Doc gen test pre sprint",
			"internalReferences": [],
			"jurisdiction": "New Zealand",
			"agreementType": "Lease",
			"client": "Landlord",
			"currency": "NZD",
			"commercial": "Yes",
			"agreementMode": "Inactive",
			"commencementDate": "1277899200000",
			"expiryDate": "1656504000000",
			"totalAnnualRent": "8000.00",
			"rent": {
			"premises": {
			"annual": "8000.00",
			"monthly": "666.67",
			"weekly": "153.85"
			},
			"carparks": {
			"annual": "0.00",
			"monthly": "0.00",
			"weekly": "0.00"
			}
			},
			"paymentStartDate": "1277899200000",
			"paymentPeriod": "Monthly",
			"rentPaymentDay": "1st",
			"rentPaymentMonth": "January",
			"rentDay": "Sunday",
			"taxation": "Plus Tax",
			"initialState": {
			"agreement": {
			"agreementId": "9250",
			"agreementType": "Lease",
			"client": "Landlord",
			"currency": "NZD",
			"commercial": "Yes",
			"agreementMode": "Inactive",
			"commencementDate": "1277899200000",
			"expiryDate": "1656504000000",
			"totalAnnualRent": "8000.00",
			"rent": {
			"premises": {
			"annual": "8000.00",
			"monthly": "666.67",
			"weekly": "153.85"
			},
			"carparks": {
			"annual": "0.00",
			"monthly": "0.00",
			"weekly": "0.00"
			}
			},
			"paymentStartDate": "1277899200000",
			"paymentPeriod": "Monthly",
			"rentPaymentDay": "1st",
			"rentPaymentMonth": "January",
			"rentDay": "Sunday",
			"taxation": "Plus Tax",
			"parties": {
			"Landlord": [
			  {
			"entityId": "6435",
			"entityName": "DAveo ltd"
			}
			],
			"Tenant": [
			  {
			"entityId": "7168",
			"entityName": "New Company"
			}
			],
			}
			}
			}
			},
			"relationships": {
			"properties": {
			"links": {
			"self": "/organisations/1/agreements/9250/relationships/properties/",
			"related": "/organisations/1/properties/"
			},
			"data": [
			  {
			"type": "properties",
			"id": "2399"
			}
			],
			},
			"events": {
			"links": {
			"self": "/organisations/1/agreements/9250/relationships/events/",
			"related": "/organisations/1/events/"
			},
			"data": [
			  {
			"type": "events",
			"id": "76926"
			},
			  {
			"type": "events",
			"id": "76927"
			},
			  {
			"type": "events",
			"id": "76928"
			},
			  {
			"type": "events",
			"id": "76930"
			},
			  {
			"type": "events",
			"id": "76931"
			},
			  {
			"type": "events",
			"id": "76932"
			},
			  {
			"type": "events",
			"id": "76934"
			},
			  {
			"type": "events",
			"id": "76935"
			},
			  {
			"type": "events",
			"id": "76939"
			},
			  {
			"type": "events",
			"id": "76940"
			}
			],
			},
			"organisations": {
			"links": {
			"self": "/organisations/1/agreements/9250/relationships/organisations/",
			"related": "/organisations/"
			},
			"data": [
			  {
			"type": "organisations",
			"id": "1"
			}
			],
			},
			"parties": {
			"Landlord": {
			"links": {
			"self": "/organisations/1/agreements/9250/relationships/parties/Landlord/",
			"related": "/organisations/1/entities/"
			},
			"data": [
			  {
			"type": "entities",
			"id": "6435"
			}
			],
			},
			"Tenant": {
			"links": {
			"self": "/organisations/1/agreements/9250/relationships/parties/Tenant/",
			"related": "/organisations/1/entities/"
			},
			"data": [
			  {
			"type": "entities",
			"id": "7168"
			}
			],
			}
			}
			}
			},
			  {
			"type": "agreements",
			"id": 8970,
			"attributes": {
			"insertedDate": 1435785476000,
			"insertedBy": 2,
			"updatedDate": 1461044426000,
			"knownAs": "Event date test",
			"internalReferences": [],
			"jurisdiction": "New Zealand",
			"agreementType": "Lease",
			"client": "Landlord",
			"currency": "NZD",
			"commercial": "Yes",
			"agreementMode": "Active",
			"commencementDate": "1280577600000",
			"expiryDate": "1575374400000",
			"totalAnnualRent": "6000.00",
			"rent": {
			"premises": {
			"annual": "6000.00",
			"monthly": "500.00",
			"weekly": "115.38"
			},
			"carparks": {
			"annual": "0.00",
			"monthly": "0.00",
			"weekly": "0.00"
			}
			},
			"paymentPeriod": "Monthly",
			"rentPaymentDay": "1st",
			"rentPaymentMonth": "January",
			"rentDay": "Sunday",
			"taxation": "Plus Tax",
			"initialState": {
			"agreement": {
			"agreementId": "8970",
			"agreementType": "Lease",
			"client": "Landlord",
			"currency": "NZD",
			"commercial": "Yes",
			"agreementMode": "Active",
			"commencementDate": "1280577600000",
			"expiryDate": "1575374400000",
			"totalAnnualRent": "6000.00",
			"rent": {
			"premises": {
			"annual": "6000.00",
			"monthly": "500.00",
			"weekly": "115.38"
			},
			"carparks": {
			"annual": "0.00",
			"monthly": "0.00",
			"weekly": "0.00"
			}
			},
			"paymentPeriod": "Monthly",
			"rentPaymentDay": "1st",
			"rentPaymentMonth": "January",
			"rentDay": "Sunday",
			"taxation": "Plus Tax",
			"parties": {
			"Landlord": [
			  {
			"entityId": "6951",
			"entityName": "Trusting Trustees Trust"
			}
			],
			"Tenant": [
			  {
			"entityId": "7114",
			"entityName": "A new company"
			}
			],
			}
			}
			}
			},
			"relationships": {
			"properties": {
			"links": {
			"self": "/organisations/1/agreements/8970/relationships/properties/",
			"related": "/organisations/1/properties/"
			},
			"data": [
			  {
			"type": "properties",
			"id": "2226"
			}
			],
			},
			"events": {
			"links": {
			"self": "/organisations/1/agreements/8970/relationships/events/",
			"related": "/organisations/1/events/"
			},
			"data": [
			  {
			"type": "events",
			"id": "66820"
			},
			  {
			"type": "events",
			"id": "66821"
			},
			  {
			"type": "events",
			"id": "66822"
			},
			  {
			"type": "events",
			"id": "66823"
			},
			  {
			"type": "events",
			"id": "66825"
			},
			  {
			"type": "events",
			"id": "66826"
			},
			  {
			"type": "events",
			"id": "66827"
			},
			  {
			"type": "events",
			"id": "66828"
			}
			],
			},
			"organisations": {
			"links": {
			"self": "/organisations/1/agreements/8970/relationships/organisations/",
			"related": "/organisations/"
			},
			"data": [
			  {
			"type": "organisations",
			"id": "1"
			}
			],
			},
			"parties": {
			"Landlord": {
			"links": {
			"self": "/organisations/1/agreements/8970/relationships/parties/Landlord/",
			"related": "/organisations/1/entities/"
			},
			"data": [
			  {
			"type": "entities",
			"id": "6951"
			}
			],
			},
			"Tenant": {
			"links": {
			"self": "/organisations/1/agreements/8970/relationships/parties/Tenant/",
			"related": "/organisations/1/entities/"
			},
			"data": [
			  {
			"type": "entities",
			"id": "7114"
			}
			],
			}
			}
			}
			},
			  {
			"type": "agreements",
			"id": 9315,
			"attributes": {
			"insertedDate": 1438726919000,
			"insertedBy": 2,
			"updatedDate": 1461044426000,
			"knownAs": "Event doc test",
			"internalReferences": [],
			"jurisdiction": "New Zealand",
			"agreementType": "Lease",
			"client": "Landlord",
			"currency": "NZD",
			"commercial": "Yes",
			"agreementMode": "Active",
			"commencementDate": "1281355200000",
			"expiryDate": "1596888000000",
			"totalAnnualRent": "50000.00",
			"rent": {
			"premises": {
			"annual": "50000.00",
			"monthly": "4166.67",
			"weekly": "961.54"
			},
			"carparks": {
			"annual": "0.00",
			"monthly": "0.00",
			"weekly": "0.00"
			}
			},
			"paymentStartDate": "1281355200000",
			"paymentPeriod": "Monthly",
			"rentPaymentDay": "1st",
			"rentPaymentMonth": "January",
			"rentDay": "Sunday",
			"taxation": "Plus Tax",
			"initialState": {
			"agreement": {
			"agreementId": "9315",
			"agreementType": "Lease",
			"client": "Landlord",
			"currency": "NZD",
			"commercial": "Yes",
			"agreementMode": "Active",
			"commencementDate": "1281355200000",
			"expiryDate": "1596888000000",
			"totalAnnualRent": "50000.00",
			"rent": {
			"premises": {
			"annual": "50000.00",
			"monthly": "4166.67",
			"weekly": "961.54"
			},
			"carparks": {
			"annual": "0.00",
			"monthly": "0.00",
			"weekly": "0.00"
			}
			},
			"paymentStartDate": "1281355200000",
			"paymentPeriod": "Monthly",
			"rentPaymentDay": "1st",
			"rentPaymentMonth": "January",
			"rentDay": "Sunday",
			"taxation": "Plus Tax",
			"parties": {
			"Tenant": [
			  {
			"entityId": "7168",
			"entityName": "New Company"
			}
			],
			"Landlord": [
			  {
			"entityId": "7476",
			"entityName": "Another Company"
			}
			],
			}
			}
			}
			},
			"relationships": {
			"properties": {
			"links": {
			"self": "/organisations/1/agreements/9315/relationships/properties/",
			"related": "/organisations/1/properties/"
			},
			"data": [
			  {
			"type": "properties",
			"id": "2450"
			}
			],
			},
			"events": {
			"links": {
			"self": "/organisations/1/agreements/9315/relationships/events/",
			"related": "/organisations/1/events/"
			},
			"data": [
			  {
			"type": "events",
			"id": "82307"
			},
			  {
			"type": "events",
			"id": "82308"
			},
			  {
			"type": "events",
			"id": "82309"
			},
			  {
			"type": "events",
			"id": "82310"
			},
			  {
			"type": "events",
			"id": "82311"
			},
			  {
			"type": "events",
			"id": "82312"
			},
			  {
			"type": "events",
			"id": "82313"
			},
			  {
			"type": "events",
			"id": "82315"
			},
			  {
			"type": "events",
			"id": "82317"
			},
			  {
			"type": "events",
			"id": "82319"
			},
			  {
			"type": "events",
			"id": "82321"
			}
			],
			},
			"organisations": {
			"links": {
			"self": "/organisations/1/agreements/9315/relationships/organisations/",
			"related": "/organisations/"
			},
			"data": [
			  {
			"type": "organisations",
			"id": "1"
			}
			],
			},
			"parties": {
			"Tenant": {
			"links": {
			"self": "/organisations/1/agreements/9315/relationships/parties/Tenant/",
			"related": "/organisations/1/entities/"
			},
			"data": [
			  {
			"type": "entities",
			"id": "7168"
			}
			],
			},
			"Landlord": {
			"links": {
			"self": "/organisations/1/agreements/9315/relationships/parties/Landlord/",
			"related": "/organisations/1/entities/"
			},
			"data": [
			  {
			"type": "entities",
			"id": "7476"
			}
			],
			}
			}
			}
			},
			  {
			"type": "agreements",
			"id": 179721,
			"attributes": {
			"insertedDate": 1462866772000,
			"insertedBy": 2,
			"updatedDate": 1462866865000,
			"updatedBy": 2,
			"knownAs": "Events work",
			"internalReferences": [],
			"jurisdiction": "New Zealand",
			"agreementType": "Lease",
			"client": "Landlord",
			"currency": "NZD",
			"commercial": "Yes",
			"agreementMode": "Active",
			"commencementDate": "1275307200000",
			"expiryDate": "1338465600000",
			"totalAnnualRent": "0.00",
			"rent": {
			"premises": {
			"annual": "0.00",
			"monthly": "0.00",
			"weekly": "0.00"
			},
			"carparks": {
			"annual": "0.00",
			"monthly": "0.00",
			"weekly": "0.00"
			}
			},
			"initialState": {
			"agreement": {
			"agreementId": "179721",
			"agreementType": "Lease",
			"client": "Landlord",
			"currency": "NZD",
			"commercial": "Yes",
			"agreementMode": "Active",
			"commencementDate": "1275307200000",
			"expiryDate": "1338465600000",
			"totalAnnualRent": "0.00",
			"rent": {
			"premises": {
			"annual": "0.00",
			"monthly": "0.00",
			"weekly": "0.00"
			},
			"carparks": {
			"annual": "0.00",
			"monthly": "0.00",
			"weekly": "0.00"
			}
			},
			"parties": {}
			}
			}
			},
			"relationships": {
			"events": {
			"links": {
			"self": "/organisations/1/agreements/179721/relationships/events/",
			"related": "/organisations/1/events/"
			},
			"data": [
			  {
			"type": "events",
			"id": "165967"
			},
			  {
			"type": "events",
			"id": "165969"
			},
			  {
			"type": "events",
			"id": "165972"
			},
			  {
			"type": "events",
			"id": "165974"
			},
			  {
			"type": "events",
			"id": "165976"
			},
			  {
			"type": "events",
			"id": "165978"
			},
			  {
			"type": "events",
			"id": "165979"
			},
			  {
			"type": "events",
			"id": "165980"
			}
			],
			},
			"organisations": {
			"links": {
			"self": "/organisations/1/agreements/179721/relationships/organisations/",
			"related": "/organisations/"
			},
			"data": [
			  {
			"type": "organisations",
			"id": "1"
			}
			],
			}
			}
			},
			  {
			"type": "agreements",
			"id": 17156,
			"attributes": {
			"insertedDate": 1440984994000,
			"insertedBy": 2,
			"updatedDate": 1440986509000,
			"updatedBy": 2,
			"knownAs": "Expiry event test",
			"internalReferences": [],
			"jurisdiction": "New Zealand",
			"agreementType": "Lease",
			"client": "Landlord",
			"currency": "NZD",
			"commercial": "Yes",
			"agreementMode": "Active",
			"commencementDate": "1441022400000",
			"expiryDate": "1477828800000",
			"totalAnnualRent": "0.00",
			"rent": {
			"premises": {
			"annual": "0.00",
			"monthly": "0.00",
			"weekly": "0.00"
			},
			"carparks": {
			"annual": "0.00",
			"monthly": "0.00",
			"weekly": "0.00"
			}
			},
			"hoursOfAccess": "hello ' to thtis",
			"bankGuaranteeSum": "hgh, 90",
			"initialState": {
			"agreement": {
			"agreementId": "17156",
			"agreementType": "Lease",
			"client": "Landlord",
			"currency": "NZD",
			"commercial": "Yes",
			"agreementMode": "Active",
			"commencementDate": "1441022400000",
			"expiryDate": "1477828800000",
			"totalAnnualRent": "0.00",
			"rent": {
			"premises": {
			"annual": "0.00",
			"monthly": "0.00",
			"weekly": "0.00"
			},
			"carparks": {
			"annual": "0.00",
			"monthly": "0.00",
			"weekly": "0.00"
			}
			},
			"hoursOfAccess": "hello ' to thtis",
			"bankGuaranteeSum": "hgh, 90",
			"parties": {}
			}
			}
			},
			"relationships": {
			"events": {
			"links": {
			"self": "/organisations/1/agreements/17156/relationships/events/",
			"related": "/organisations/1/events/"
			},
			"data": [
			  {
			"type": "events",
			"id": "94296"
			},
			  {
			"type": "events",
			"id": "94297"
			},
			  {
			"type": "events",
			"id": "94299"
			},
			  {
			"type": "events",
			"id": "94311"
			}
			],
			},
			"organisations": {
			"links": {
			"self": "/organisations/1/agreements/17156/relationships/organisations/",
			"related": "/organisations/"
			},
			"data": [
			  {
			"type": "organisations",
			"id": "1"
			}
			],
			}
			}
			},
			  {
			"type": "agreements",
			"id": 36184,
			"attributes": {
			"insertedDate": 1445386328000,
			"insertedBy": 2,
			"updatedDate": 1461044427000,
			"knownAs": "Gareth test",
			"legalDescription": "sdf sd f sdf sdf sd f s df sd f s df",
			"internalReferences": [],
			"jurisdiction": "New Zealand",
			"agreementType": "Lease",
			"client": "Landlord",
			"currency": "NZD",
			"commercial": "Yes",
			"agreementMode": "Active",
			"totalAnnualRent": "101.00",
			"rent": {
			"premises": {
			"annual": "100.00",
			"monthly": "8.33",
			"weekly": "1.92"
			},
			"carparks": {
			"annual": "1.00",
			"monthly": "0.08",
			"weekly": "0.02"
			}
			},
			"paymentPeriod": "Monthly",
			"rentPaymentDay": "1st",
			"rentPaymentMonth": "January",
			"rentDay": "Sunday",
			"taxation": "Plus Tax",
			"additionalRent": "fsdf \n sd \n\n\nsd f",
			"fileNotes": "asd as  a sd  as   a as d",
			"initialState": {
			"agreement": {
			"agreementId": "36184",
			"agreementType": "Lease",
			"client": "Landlord",
			"currency": "NZD",
			"commercial": "Yes",
			"agreementMode": "Inactive",
			"totalAnnualRent": "101.00",
			"rent": {
			"premises": {
			"annual": "100.00",
			"monthly": "8.33",
			"weekly": "1.92"
			},
			"carparks": {
			"annual": "1.00",
			"monthly": "0.08",
			"weekly": "0.02"
			}
			},
			"paymentPeriod": "Monthly",
			"rentPaymentDay": "1st",
			"rentPaymentMonth": "January",
			"rentDay": "Sunday",
			"taxation": "Plus Tax",
			"additionalRent": "fsdf \n sd \n\n\nsd f",
			"fileNotes": "asd as  a sd  as   a as d",
			"parties": {
			"Tenant": [
			  {
			"entityId": "6949",
			"entityName": "Dr Death"
			}
			],
			"Landlord": [
			  {
			"entityId": "6948",
			"entityName": "Allegiance of Niceness"
			}
			],
			"Guarantor": [
			  {
			"entityId": "6437",
			"entityName": "Mel"
			}
			],
			}
			}
			},
			"commencementDate": "1446465600000",
			"expiryDate": "1541073600000"
			},
			"relationships": {
			"properties": {
			"links": {
			"self": "/organisations/1/agreements/36184/relationships/properties/",
			"related": "/organisations/1/properties/"
			},
			"data": [
			  {
			"type": "properties",
			"id": "4991"
			}
			],
			},
			"events": {
			"links": {
			"self": "/organisations/1/agreements/36184/relationships/events/",
			"related": "/organisations/1/events/"
			},
			"data": [
			  {
			"type": "events",
			"id": "107203"
			},
			  {
			"type": "events",
			"id": "107204"
			},
			  {
			"type": "events",
			"id": "107205"
			}
			],
			},
			"organisations": {
			"links": {
			"self": "/organisations/1/agreements/36184/relationships/organisations/",
			"related": "/organisations/"
			},
			"data": [
			  {
			"type": "organisations",
			"id": "1"
			}
			],
			},
			"parties": {
			"Tenant": {
			"links": {
			"self": "/organisations/1/agreements/36184/relationships/parties/Tenant/",
			"related": "/organisations/1/entities/"
			},
			"data": [
			  {
			"type": "entities",
			"id": "6949"
			}
			],
			},
			"Landlord": {
			"links": {
			"self": "/organisations/1/agreements/36184/relationships/parties/Landlord/",
			"related": "/organisations/1/entities/"
			},
			"data": [
			  {
			"type": "entities",
			"id": "6948"
			}
			],
			},
			"Guarantor": {
			"links": {
			"self": "/organisations/1/agreements/36184/relationships/parties/Guarantor/",
			"related": "/organisations/1/entities/"
			},
			"data": [
			  {
			"type": "entities",
			"id": "6437"
			}
			],
			}
			}
			}
			},
			  {
			"type": "agreements",
			"id": 8268,
			"attributes": {
			"insertedDate": 1431138320000,
			"insertedBy": 2,
			"updatedDate": 1461044425000,
			"knownAs": "Good test",
			"legalDescription": "Hello &quot;yess&quot; sdfsd",
			"internalReferences": [],
			"jurisdiction": "New Zealand",
			"agreementType": "Lease",
			"client": "Landlord",
			"currency": "NZD",
			"commercial": "Yes",
			"agreementMode": "Active",
			"commencementDate": "957096000000",
			"expiryDate": "1525003200000",
			"totalAnnualRent": "5000.00",
			"rent": {
			"premises": {
			"annual": "5000.00",
			"monthly": "416.67",
			"weekly": "96.15"
			},
			"carparks": {
			"annual": "0.00",
			"monthly": "0.00",
			"weekly": "0.00"
			}
			},
			"paymentStartDate": "957096000000",
			"paymentPeriod": "Monthly",
			"rentPaymentDay": "1st",
			"rentPaymentMonth": "January",
			"rentDay": "Sunday",
			"taxation": "Incl. Tax",
			"initialState": {
			"agreement": {
			"agreementId": "8268",
			"agreementType": "Lease",
			"client": "Landlord",
			"currency": "NZD",
			"commercial": "Yes",
			"agreementMode": "Active",
			"commencementDate": "957096000000",
			"expiryDate": "1525003200000",
			"totalAnnualRent": "5000.00",
			"rent": {
			"premises": {
			"annual": "5000.00",
			"monthly": "416.67",
			"weekly": "96.15"
			},
			"carparks": {
			"annual": "0.00",
			"monthly": "0.00",
			"weekly": "0.00"
			}
			},
			"paymentStartDate": "957096000000",
			"paymentPeriod": "Monthly",
			"rentPaymentDay": "1st",
			"rentPaymentMonth": "January",
			"rentDay": "Sunday",
			"taxation": "Incl. Tax",
			"parties": {
			"Landlord": [
			  {
			"entityId": "214",
			"entityName": "Jill Maloney Trust"
			}
			],
			"Tenant": [
			  {
			"entityId": "517",
			"entityName": "Mr ASB"
			}
			],
			"Guarantor": [
			  {
			"entityId": "7705",
			"entityName": "Pah pah ltd"
			}
			],
			}
			}
			}
			},
			"relationships": {
			"properties": {
			"links": {
			"self": "/organisations/1/agreements/8268/relationships/properties/",
			"related": "/organisations/1/properties/"
			},
			"data": [
			  {
			"type": "properties",
			"id": "4993"
			},
			  {
			"type": "properties",
			"id": "1758"
			}
			],
			},
			"events": {
			"links": {
			"self": "/organisations/1/agreements/8268/relationships/events/",
			"related": "/organisations/1/events/"
			},
			"data": [
			  {
			"type": "events",
			"id": "50433"
			},
			  {
			"type": "events",
			"id": "50434"
			},
			  {
			"type": "events",
			"id": "50435"
			},
			  {
			"type": "events",
			"id": "50437"
			},
			  {
			"type": "events",
			"id": "50439"
			},
			  {
			"type": "events",
			"id": "50440"
			},
			  {
			"type": "events",
			"id": "50441"
			},
			  {
			"type": "events",
			"id": "50443"
			},
			  {
			"type": "events",
			"id": "50444"
			},
			  {
			"type": "events",
			"id": "50446"
			},
			  {
			"type": "events",
			"id": "50447"
			},
			  {
			"type": "events",
			"id": "103150"
			},
			  {
			"type": "events",
			"id": "103152"
			},
			  {
			"type": "events",
			"id": "103154"
			}
			],
			},
			"organisations": {
			"links": {
			"self": "/organisations/1/agreements/8268/relationships/organisations/",
			"related": "/organisations/"
			},
			"data": [
			  {
			"type": "organisations",
			"id": "1"
			}
			],
			},
			"parties": {
			"Landlord": {
			"links": {
			"self": "/organisations/1/agreements/8268/relationships/parties/Landlord/",
			"related": "/organisations/1/entities/"
			},
			"data": [
			  {
			"type": "entities",
			"id": "214"
			}
			],
			},
			"Tenant": {
			"links": {
			"self": "/organisations/1/agreements/8268/relationships/parties/Tenant/",
			"related": "/organisations/1/entities/"
			},
			"data": [
			  {
			"type": "entities",
			"id": "517"
			}
			],
			},
			"Guarantor": {
			"links": {
			"self": "/organisations/1/agreements/8268/relationships/parties/Guarantor/",
			"related": "/organisations/1/entities/"
			},
			"data": [
			  {
			"type": "entities",
			"id": "7705"
			}
			],
			}
			}
			}
			},
			  {
			"type": "agreements",
			"id": 119381,
			"attributes": {
			"insertedDate": 1455836043000,
			"insertedBy": 2,
			"knownAs": "Individual Test",
			"internalReferences": [],
			"jurisdiction": "New Zealand",
			"agreementType": "Lease",
			"client": "Landlord",
			"currency": "NZD",
			"commercial": "Yes",
			"agreementMode": "Inactive",
			"totalAnnualRent": "0.00",
			"rent": {
			"premises": {
			"annual": "0.00",
			"monthly": "0.00",
			"weekly": "0.00"
			},
			"carparks": {
			"annual": "0.00",
			"monthly": "0.00",
			"weekly": "0.00"
			}
			},
			"initialState": {
			"agreement": {
			"agreementId": "119381",
			"agreementType": "Lease",
			"client": "Landlord",
			"currency": "NZD",
			"commercial": "Yes",
			"agreementMode": "Inactive",
			"totalAnnualRent": "0.00",
			"rent": {
			"premises": {
			"annual": "0.00",
			"monthly": "0.00",
			"weekly": "0.00"
			},
			"carparks": {
			"annual": "0.00",
			"monthly": "0.00",
			"weekly": "0.00"
			}
			},
			"parties": {}
			}
			}
			},
			"relationships": {
			"organisations": {
			"links": {
			"self": "/organisations/1/agreements/119381/relationships/organisations/",
			"related": "/organisations/"
			},
			"data": [
			  {
			"type": "organisations",
			"id": "1"
			}
			],
			}
			}
			},
			  {
			"type": "agreements",
			"id": 14333,
			"attributes": {
			"insertedDate": 1440412686000,
			"insertedBy": 2,
			"updatedDate": 1461044427000,
			"knownAs": "Jello",
			"internalReferences": [
			  "kjk"
			],
			"jurisdiction": "New Zealand",
			"agreementType": "Lease",
			"client": "Landlord",
			"currency": "NZD",
			"commercial": "Yes",
			"agreementMode": "Active",
			"commencementDate": "1280577600000",
			"expiryDate": "1469880000000",
			"totalAnnualRent": "7000.00",
			"rent": {
			"premises": {
			"annual": "7000.00",
			"monthly": "583.33",
			"weekly": "134.62"
			},
			"carparks": {
			"annual": "0.00",
			"monthly": "0.00",
			"weekly": "0.00"
			}
			},
			"paymentStartDate": "-1703678400000",
			"paymentPeriod": "Monthly",
			"rentPaymentDay": "1st",
			"rentPaymentMonth": "January",
			"rentDay": "Sunday",
			"taxation": "Plus Tax",
			"initialState": {
			"agreement": {
			"agreementId": "14333",
			"agreementType": "Lease",
			"client": "Landlord",
			"currency": "NZD",
			"commercial": "Yes",
			"agreementMode": "Active",
			"commencementDate": "1280577600000",
			"expiryDate": "1469880000000",
			"totalAnnualRent": "7000.00",
			"rent": {
			"premises": {
			"annual": "7000.00",
			"monthly": "583.33",
			"weekly": "134.62"
			},
			"carparks": {
			"annual": "0.00",
			"monthly": "0.00",
			"weekly": "0.00"
			}
			},
			"paymentStartDate": "-1703678400000",
			"paymentPeriod": "Monthly",
			"rentPaymentDay": "1st",
			"rentPaymentMonth": "January",
			"rentDay": "Sunday",
			"taxation": "Plus Tax",
			"parties": {
			"Landlord": [
			  {
			"entityId": "6435",
			"entityName": "DAveo ltd"
			}
			],
			"Tenant": [
			  {
			"entityId": "214",
			"entityName": "Jill Maloney Trust"
			}
			],
			}
			}
			}
			},
			"relationships": {
			"properties": {
			"links": {
			"self": "/organisations/1/agreements/14333/relationships/properties/",
			"related": "/organisations/1/properties/"
			},
			"data": [
			  {
			"type": "properties",
			"id": "2634"
			}
			],
			},
			"events": {
			"links": {
			"self": "/organisations/1/agreements/14333/relationships/events/",
			"related": "/organisations/1/events/"
			},
			"data": [
			  {
			"type": "events",
			"id": "92282"
			},
			  {
			"type": "events",
			"id": "92283"
			},
			  {
			"type": "events",
			"id": "92286"
			},
			  {
			"type": "events",
			"id": "92288"
			},
			  {
			"type": "events",
			"id": "92290"
			},
			  {
			"type": "events",
			"id": "92856"
			},
			  {
			"type": "events",
			"id": "92858"
			}
			],
			},
			"organisations": {
			"links": {
			"self": "/organisations/1/agreements/14333/relationships/organisations/",
			"related": "/organisations/"
			},
			"data": [
			  {
			"type": "organisations",
			"id": "1"
			}
			],
			},
			"parties": {
			"Landlord": {
			"links": {
			"self": "/organisations/1/agreements/14333/relationships/parties/Landlord/",
			"related": "/organisations/1/entities/"
			},
			"data": [
			  {
			"type": "entities",
			"id": "6435"
			}
			],
			},
			"Tenant": {
			"links": {
			"self": "/organisations/1/agreements/14333/relationships/parties/Tenant/",
			"related": "/organisations/1/entities/"
			},
			"data": [
			  {
			"type": "entities",
			"id": "214"
			}
			],
			}
			}
			}
			},
			  {
			"type": "agreements",
			"id": 8256,
			"attributes": {
			"insertedDate": 1430867063000,
			"insertedBy": 2,
			"updatedDate": 1461044425000,
			"knownAs": "License TEST",
			"internalReferences": [],
			"jurisdiction": "New Zealand",
			"agreementType": "License",
			"client": "Licensor",
			"currency": "NZD",
			"commercial": "Yes",
			"agreementMode": "Active",
			"commencementDate": "1051704000000",
			"expiryDate": "1493467200000",
			"totalAnnualRent": "5555.00",
			"rent": {
			"premises": {
			"annual": "5555.00",
			"monthly": "462.92",
			"weekly": "106.83"
			},
			"carparks": {
			"annual": "0.00",
			"monthly": "0.00",
			"weekly": "0.00"
			}
			},
			"paymentStartDate": "1051704000000",
			"paymentPeriod": "Monthly",
			"rentPaymentDay": "1st",
			"rentPaymentMonth": "January",
			"rentDay": "Sunday",
			"taxation": "Plus Tax",
			"initialState": {
			"agreement": {
			"agreementId": "8256",
			"agreementType": "License",
			"client": "Licensor",
			"currency": "NZD",
			"commercial": "Yes",
			"agreementMode": "Active",
			"commencementDate": "1051704000000",
			"expiryDate": "1493467200000",
			"totalAnnualRent": "5555.00",
			"rent": {
			"premises": {
			"annual": "5555.00",
			"monthly": "462.92",
			"weekly": "106.83"
			},
			"carparks": {
			"annual": "0.00",
			"monthly": "0.00",
			"weekly": "0.00"
			}
			},
			"paymentStartDate": "1051704000000",
			"paymentPeriod": "Monthly",
			"rentPaymentDay": "1st",
			"rentPaymentMonth": "January",
			"rentDay": "Sunday",
			"taxation": "Plus Tax",
			"parties": {
			"Licensor": [
			  {
			"entityId": "6435",
			"entityName": "DAveo ltd"
			}
			],
			"Licensee": [
			  {
			"entityId": "7168",
			"entityName": "New Company"
			}
			],
			"Guarantor": [
			  {
			"entityId": "213",
			"entityName": "Mr DAve Philip Bromley"
			}
			],
			}
			}
			}
			},
			"relationships": {
			"properties": {
			"links": {
			"self": "/organisations/1/agreements/8256/relationships/properties/",
			"related": "/organisations/1/properties/"
			},
			"data": [
			  {
			"type": "properties",
			"id": "4980"
			}
			],
			},
			"notes": {
			"links": {
			"self": "/organisations/1/agreements/8256/relationships/notes/",
			"related": "/organisations/1/notes/"
			},
			"data": [
			  {
			"type": "notes",
			"id": 278
			},
			  {
			"type": "notes",
			"id": 277
			}
			],
			},
			"events": {
			"links": {
			"self": "/organisations/1/agreements/8256/relationships/events/",
			"related": "/organisations/1/events/"
			},
			"data": [
			  {
			"type": "events",
			"id": "49908"
			},
			  {
			"type": "events",
			"id": "49909"
			},
			  {
			"type": "events",
			"id": "49914"
			},
			  {
			"type": "events",
			"id": "49915"
			},
			  {
			"type": "events",
			"id": "49916"
			},
			  {
			"type": "events",
			"id": "49917"
			},
			  {
			"type": "events",
			"id": "49918"
			},
			  {
			"type": "events",
			"id": "49919"
			},
			  {
			"type": "events",
			"id": "49920"
			},
			  {
			"type": "events",
			"id": "49921"
			},
			  {
			"type": "events",
			"id": "49922"
			},
			  {
			"type": "events",
			"id": "49923"
			},
			  {
			"type": "events",
			"id": "49924"
			},
			  {
			"type": "events",
			"id": "49925"
			},
			  {
			"type": "events",
			"id": "49926"
			}
			],
			},
			"organisations": {
			"links": {
			"self": "/organisations/1/agreements/8256/relationships/organisations/",
			"related": "/organisations/"
			},
			"data": [
			  {
			"type": "organisations",
			"id": "1"
			}
			],
			},
			"parties": {
			"Licensor": {
			"links": {
			"self": "/organisations/1/agreements/8256/relationships/parties/Licensor/",
			"related": "/organisations/1/entities/"
			},
			"data": [
			  {
			"type": "entities",
			"id": "6435"
			}
			],
			},
			"Licensee": {
			"links": {
			"self": "/organisations/1/agreements/8256/relationships/parties/Licensee/",
			"related": "/organisations/1/entities/"
			},
			"data": [
			  {
			"type": "entities",
			"id": "7168"
			}
			],
			},
			"Guarantor": {
			"links": {
			"self": "/organisations/1/agreements/8256/relationships/parties/Guarantor/",
			"related": "/organisations/1/entities/"
			},
			"data": [
			  {
			"type": "entities",
			"id": "213"
			}
			],
			}
			}
			}
			},
			  {
			"type": "agreements",
			"id": 5473,
			"attributes": {
			"insertedDate": 1400454863000,
			"insertedBy": 2,
			"updatedDate": 1461044425000,
			"knownAs": "Lolpol",
			"internalReferences": [
			  "2461"
			],
			"jurisdiction": "New Zealand",
			"agreementType": "License",
			"client": "Guarantor",
			"currency": "NZD",
			"commercial": "No",
			"agreementMode": "Inactive",
			"commencementDate": "1401537600000",
			"totalAnnualRent": "0.00",
			"rent": {
			"premises": {
			"annual": "0.00",
			"monthly": "0.00",
			"weekly": "0.00"
			},
			"carparks": {
			"annual": "0.00",
			"monthly": "0.00",
			"weekly": "0.00"
			}
			},
			"paymentPeriod": "Monthly",
			"rentPaymentDay": "1st",
			"rentPaymentMonth": "January",
			"rentDay": "Sunday",
			"fileNotes": "fgchdhsrty hsrty srt ysrty srtys y5y sjxfgh srt",
			"initialState": {
			"agreement": {
			"agreementId": "5473",
			"agreementType": "License",
			"client": "Guarantor",
			"currency": "NZD",
			"commercial": "No",
			"agreementMode": "Inactive",
			"commencementDate": "1401537600000",
			"totalAnnualRent": "0.00",
			"rent": {
			"premises": {
			"annual": "0.00",
			"monthly": "0.00",
			"weekly": "0.00"
			},
			"carparks": {
			"annual": "0.00",
			"monthly": "0.00",
			"weekly": "0.00"
			}
			},
			"paymentPeriod": "Monthly",
			"rentPaymentDay": "1st",
			"rentPaymentMonth": "January",
			"rentDay": "Sunday",
			"fileNotes": "fgchdhsrty hsrty srt ysrty srtys y5y sjxfgh srt",
			"parties": {
			"Licensor": [
			  {
			"entityId": "213",
			"entityName": "Mr DAve Philip Bromley"
			}
			],
			}
			}
			}
			},
			"relationships": {
			"properties": {
			"links": {
			"self": "/organisations/1/agreements/5473/relationships/properties/",
			"related": "/organisations/1/properties/"
			},
			"data": [
			  {
			"type": "properties",
			"id": "4974"
			}
			],
			},
			"events": {
			"links": {
			"self": "/organisations/1/agreements/5473/relationships/events/",
			"related": "/organisations/1/events/"
			},
			"data": [
			  {
			"type": "events",
			"id": "1793"
			},
			  {
			"type": "events",
			"id": "1794"
			}
			],
			},
			"organisations": {
			"links": {
			"self": "/organisations/1/agreements/5473/relationships/organisations/",
			"related": "/organisations/"
			},
			"data": [
			  {
			"type": "organisations",
			"id": "1"
			}
			],
			},
			"parties": {
			"Licensor": {
			"links": {
			"self": "/organisations/1/agreements/5473/relationships/parties/Licensor/",
			"related": "/organisations/1/entities/"
			},
			"data": [
			  {
			"type": "entities",
			"id": "213"
			}
			],
			}
			}
			}
			},
			  {
			"type": "agreements",
			"id": 8115,
			"attributes": {
			"insertedDate": 1427160920000,
			"insertedBy": 2,
			"updatedDate": 1461105414000,
			"updatedBy": 2,
			"knownAs": "Marina",
			"legalDescription": "OT234/56",
			"internalReferences": [
			  "Hello there I'm a variation "
			],
			"jurisdiction": "New Zealand",
			"agreementType": "Lease",
			"client": "Landlord",
			"currency": "NZD",
			"commercial": "Yes",
			"agreementMode": "Active",
			"commencementDate": "481204800000",
			"expiryDate": "1175342400000",
			"totalAnnualRent": "26000.00",
			"rent": {
			"premises": {
			"annual": "24000.00",
			"monthly": "2000.00",
			"weekly": "461.54"
			},
			"carparks": {
			"annual": "2000.00",
			"monthly": "166.67",
			"weekly": "38.46"
			}
			},
			"paymentStartDate": "1441195200000",
			"paymentPeriod": "Monthly",
			"rentPaymentDay": "1st",
			"rentPaymentMonth": "January",
			"rentDay": "Sunday",
			"taxation": "Plus Tax",
			"proportionOfOutgoings": "50",
			"additionalRent": "30% of income",
			"defaultInterestRate": "12%",
			"fileNotes": "Some file notes",
			"businessUse": "Bakery of course",
			"publicRiskInsuranceSum": "$20,000",
			"hoursOfAccess": "7am - 5pm",
			"airConditioningDays": "Monday - Friday",
			"airConditioningHours": "7am - 5pm",
			"bankGuaranteeSum": "$200,000",
			"originalDeedMadeDate": "1441022400000",
			"initialState": {
			"agreement": {
			"agreementId": "8115",
			"agreementType": "Lease",
			"client": "Landlord",
			"currency": "NZD",
			"commercial": "Yes",
			"agreementMode": "Active",
			"commencementDate": "481204800000",
			"expiryDate": "1175342400000",
			"totalAnnualRent": "26000.00",
			"rent": {
			"premises": {
			"annual": "24000.00",
			"monthly": "2000.00",
			"weekly": "461.54"
			},
			"carparks": {
			"annual": "2000.00",
			"monthly": "166.67",
			"weekly": "38.46"
			}
			},
			"paymentStartDate": "1441195200000",
			"paymentPeriod": "Monthly",
			"rentPaymentDay": "1st",
			"rentPaymentMonth": "January",
			"rentDay": "Sunday",
			"taxation": "Plus Tax",
			"proportionOfOutgoings": "50",
			"additionalRent": "30% of income",
			"defaultInterestRate": "12%",
			"fileNotes": "Some file notes",
			"businessUse": "Bakery of course",
			"publicRiskInsuranceSum": "$20,000",
			"hoursOfAccess": "7am - 5pm",
			"airConditioningDays": "Monday - Friday",
			"airConditioningHours": "7am - 5pm",
			"bankGuaranteeSum": "$200,000",
			"originalDeedMadeDate": "1441022400000",
			"parties": {
			"Tenant": [
			  {
			"entityId": "213",
			"entityName": "Mr DAve Philip Bromley"
			},
			  {
			"entityId": 214,
			"entityName": "Jill Maloney Trust"
			}
			],
			"Guarantor": [
			  {
			"entityId": "6947",
			"entityName": "Spiderman"
			}
			],
			"Landlord": [
			  {
			"entityId": "6949",
			"entityName": "Dr death"
			}
			],
			}
			}
			}
			},
			"relationships": {
			"properties": {
			"links": {
			"self": "/organisations/1/agreements/8115/relationships/properties/",
			"related": "/organisations/1/properties/"
			},
			"data": [
			  {
			"type": "properties",
			"id": "4998"
			},
			  {
			"type": "properties",
			"id": "4997"
			},
			  {
			"type": "properties",
			"id": "1665"
			}
			],
			},
			"notes": {
			"links": {
			"self": "/organisations/1/agreements/8115/relationships/notes/",
			"related": "/organisations/1/notes/"
			},
			"data": [
			  {
			"type": "notes",
			"id": 1553
			},
			  {
			"type": "notes",
			"id": 1552
			},
			  {
			"type": "notes",
			"id": 279
			}
			],
			},
			"events": {
			"links": {
			"self": "/organisations/1/agreements/8115/relationships/events/",
			"related": "/organisations/1/events/"
			},
			"data": [
			  {
			"type": "events",
			"id": "45473"
			},
			  {
			"type": "events",
			"id": "45474"
			},
			  {
			"type": "events",
			"id": "45482"
			},
			  {
			"type": "events",
			"id": "45483"
			},
			  {
			"type": "events",
			"id": "45954"
			},
			  {
			"type": "events",
			"id": "45963"
			},
			  {
			"type": "events",
			"id": "45972"
			},
			  {
			"type": "events",
			"id": "45981"
			},
			  {
			"type": "events",
			"id": "45990"
			},
			  {
			"type": "events",
			"id": "45999"
			},
			  {
			"type": "events",
			"id": "46008"
			},
			  {
			"type": "events",
			"id": "46017"
			},
			  {
			"type": "events",
			"id": "46026"
			},
			  {
			"type": "events",
			"id": "46035"
			},
			  {
			"type": "events",
			"id": "46044"
			},
			  {
			"type": "events",
			"id": "46053"
			},
			  {
			"type": "events",
			"id": "46062"
			},
			  {
			"type": "events",
			"id": "46071"
			},
			  {
			"type": "events",
			"id": "46080"
			},
			  {
			"type": "events",
			"id": "46089"
			},
			  {
			"type": "events",
			"id": "46098"
			},
			  {
			"type": "events",
			"id": "170071"
			},
			  {
			"type": "events",
			"id": "170073"
			},
			  {
			"type": "events",
			"id": "170075"
			},
			  {
			"type": "events",
			"id": "170077"
			}
			],
			},
			"organisations": {
			"links": {
			"self": "/organisations/1/agreements/8115/relationships/organisations/",
			"related": "/organisations/"
			},
			"data": [
			  {
			"type": "organisations",
			"id": "1"
			}
			],
			},
			"parties": {
			"Tenant": {
			"links": {
			"self": "/organisations/1/agreements/8115/relationships/parties/Tenant/",
			"related": "/organisations/1/entities/"
			},
			"data": [
			  {
			"type": "entities",
			"id": "213"
			},
			  {
			"type": "entities",
			"id": 214
			}
			],
			},
			"Guarantor": {
			"links": {
			"self": "/organisations/1/agreements/8115/relationships/parties/Guarantor/",
			"related": "/organisations/1/entities/"
			},
			"data": [
			  {
			"type": "entities",
			"id": "6947"
			}
			],
			},
			"Landlord": {
			"links": {
			"self": "/organisations/1/agreements/8115/relationships/parties/Landlord/",
			"related": "/organisations/1/entities/"
			},
			"data": [
			  {
			"type": "entities",
			"id": "6949"
			}
			],
			}
			}
			}
			},
			  {
			"type": "agreements",
			"id": 179603,
			"attributes": {
			"insertedDate": 1462845744000,
			"insertedBy": 2,
			"updatedDate": 1462845841000,
			"updatedBy": 2,
			"knownAs": "Meriton Test",
			"internalReferences": [],
			"jurisdiction": "New Zealand",
			"agreementType": "Lease",
			"client": "Landlord",
			"currency": "NZD",
			"commercial": "Yes",
			"agreementMode": "Active",
			"commencementDate": "1275307200000",
			"expiryDate": "1338465600000",
			"totalAnnualRent": "0.00",
			"rent": {
			"premises": {
			"annual": "0.00",
			"monthly": "0.00",
			"weekly": "0.00"
			},
			"carparks": {
			"annual": "0.00",
			"monthly": "0.00",
			"weekly": "0.00"
			}
			},
			"initialState": {
			"agreement": {
			"agreementId": "179603",
			"agreementType": "Lease",
			"client": "Landlord",
			"currency": "NZD",
			"commercial": "Yes",
			"agreementMode": "Active",
			"commencementDate": "1275307200000",
			"expiryDate": "1338465600000",
			"totalAnnualRent": "0.00",
			"rent": {
			"premises": {
			"annual": "0.00",
			"monthly": "0.00",
			"weekly": "0.00"
			},
			"carparks": {
			"annual": "0.00",
			"monthly": "0.00",
			"weekly": "0.00"
			}
			},
			"parties": {}
			}
			}
			},
			"relationships": {
			"events": {
			"links": {
			"self": "/organisations/1/agreements/179603/relationships/events/",
			"related": "/organisations/1/events/"
			},
			"data": [
			  {
			"type": "events",
			"id": "165930"
			},
			  {
			"type": "events",
			"id": "165936"
			},
			  {
			"type": "events",
			"id": "165938"
			},
			  {
			"type": "events",
			"id": "165940"
			},
			  {
			"type": "events",
			"id": "165942"
			},
			  {
			"type": "events",
			"id": "165944"
			},
			  {
			"type": "events",
			"id": "165945"
			},
			  {
			"type": "events",
			"id": "165946"
			},
			  {
			"type": "events",
			"id": "165947"
			}
			],
			},
			"organisations": {
			"links": {
			"self": "/organisations/1/agreements/179603/relationships/organisations/",
			"related": "/organisations/"
			},
			"data": [
			  {
			"type": "organisations",
			"id": "1"
			}
			],
			}
			}
			},
			  {
			"type": "agreements",
			"id": 8061,
			"attributes": {
			"insertedDate": 1426221791000,
			"insertedBy": 2,
			"updatedDate": 1461044425000,
			"knownAs": "Nice Lease",
			"legalDescription": "All the grounds, including the property on top of them and all the space around the buildings, including the lawns and the trees and the birds and the pond and the fish. v2.0",
			"internalReferences": [],
			"jurisdiction": "New Zealand",
			"agreementType": "Lease",
			"client": "Landlord",
			"currency": "NZD",
			"commercial": "Yes",
			"agreementMode": "Active",
			"commencementDate": "1427457600000",
			"expiryDate": "2216376000000",
			"totalAnnualRent": "57148.00",
			"rent": {
			"premises": {
			"annual": "52000.00",
			"monthly": "4333.33",
			"weekly": "1000.00"
			},
			"carparks": {
			"annual": "5148.00",
			"monthly": "429.00",
			"weekly": "99.00"
			}
			},
			"paymentStartDate": "1427457600000",
			"paymentPeriod": "Weekly",
			"rentPaymentDay": "1st",
			"rentPaymentMonth": "January",
			"rentDay": "Tuesday",
			"taxation": "Plus Tax",
			"proportionOfOutgoings": "1%",
			"additionalRent": "5% of Mothers Cookie supply",
			"defaultInterestRate": "18%",
			"fileNotes": "Must mow sidewalk berms or council will get angry.",
			"businessUse": "Circus Practice only.",
			"publicRiskInsuranceSum": "$1,000,000,000",
			"hoursOfAccess": "8am-9am",
			"airConditioningDays": "Wednesday, Thursday",
			"airConditioningHours": "1am-3am",
			"bankGuaranteeSum": "$24.15",
			"initialState": {
			"agreement": {
			"agreementId": "8061",
			"agreementType": "Lease",
			"client": "Landlord",
			"currency": "NZD",
			"commercial": "Yes",
			"agreementMode": "Active",
			"commencementDate": "1427457600000",
			"expiryDate": "2216376000000",
			"totalAnnualRent": "57148.00",
			"rent": {
			"premises": {
			"annual": "52000.00",
			"monthly": "4333.33",
			"weekly": "1000.00"
			},
			"carparks": {
			"annual": "5148.00",
			"monthly": "429.00",
			"weekly": "99.00"
			}
			},
			"paymentStartDate": "1427457600000",
			"paymentPeriod": "Weekly",
			"rentPaymentDay": "1st",
			"rentPaymentMonth": "January",
			"rentDay": "Tuesday",
			"taxation": "Plus Tax",
			"proportionOfOutgoings": "1%",
			"additionalRent": "5% of Mothers Cookie supply",
			"defaultInterestRate": "18%",
			"fileNotes": "Must mow sidewalk berms or council will get angry.",
			"businessUse": "Circus Practice only.",
			"publicRiskInsuranceSum": "$1,000,000,000",
			"hoursOfAccess": "8am-9am",
			"airConditioningDays": "Wednesday, Thursday",
			"airConditioningHours": "1am-3am",
			"bankGuaranteeSum": "$24.15",
			"parties": {
			"Landlord": [
			  {
			"entityId": "6948",
			"entityName": "Allegiance of Niceness"
			}
			],
			"Tenant": [
			  {
			"entityId": "6950",
			"entityName": "Santa Parade INC"
			}
			],
			"Guarantor": [
			  {
			"entityId": "6951",
			"entityName": "Trusting Trustees Trust"
			}
			],
			}
			}
			}
			},
			"relationships": {
			"properties": {
			"links": {
			"self": "/organisations/1/agreements/8061/relationships/properties/",
			"related": "/organisations/1/properties/"
			},
			"data": [
			  {
			"type": "properties",
			"id": "5000"
			},
			  {
			"type": "properties",
			"id": "4999"
			},
			  {
			"type": "properties",
			"id": "1634"
			}
			],
			},
			"notes": {
			"links": {
			"self": "/organisations/1/agreements/8061/relationships/notes/",
			"related": "/organisations/1/notes/"
			},
			"data": [
			  {
			"type": "notes",
			"id": 124
			}
			],
			},
			"events": {
			"links": {
			"self": "/organisations/1/agreements/8061/relationships/events/",
			"related": "/organisations/1/events/"
			},
			"data": [
			  {
			"type": "events",
			"id": "42024"
			},
			  {
			"type": "events",
			"id": "42025"
			},
			  {
			"type": "events",
			"id": "42053"
			},
			  {
			"type": "events",
			"id": "42055"
			},
			  {
			"type": "events",
			"id": "42057"
			},
			  {
			"type": "events",
			"id": "42061"
			},
			  {
			"type": "events",
			"id": "42063"
			},
			  {
			"type": "events",
			"id": "42283"
			},
			  {
			"type": "events",
			"id": "42309"
			},
			  {
			"type": "events",
			"id": "42350"
			},
			  {
			"type": "events",
			"id": "42378"
			},
			  {
			"type": "events",
			"id": "42421"
			},
			  {
			"type": "events",
			"id": "42478"
			},
			  {
			"type": "events",
			"id": "42636"
			},
			  {
			"type": "events",
			"id": "42847"
			},
			  {
			"type": "events",
			"id": "42956"
			},
			  {
			"type": "events",
			"id": "42958"
			},
			  {
			"type": "events",
			"id": "42960"
			},
			  {
			"type": "events",
			"id": "42962"
			},
			  {
			"type": "events",
			"id": "42965"
			},
			  {
			"type": "events",
			"id": "42967"
			},
			  {
			"type": "events",
			"id": "42969"
			},
			  {
			"type": "events",
			"id": "42971"
			},
			  {
			"type": "events",
			"id": "42973"
			},
			  {
			"type": "events",
			"id": "42976"
			},
			  {
			"type": "events",
			"id": "42979"
			},
			  {
			"type": "events",
			"id": "42982"
			},
			  {
			"type": "events",
			"id": "42983"
			}
			],
			},
			"organisations": {
			"links": {
			"self": "/organisations/1/agreements/8061/relationships/organisations/",
			"related": "/organisations/"
			},
			"data": [
			  {
			"type": "organisations",
			"id": "1"
			}
			],
			},
			"parties": {
			"Landlord": {
			"links": {
			"self": "/organisations/1/agreements/8061/relationships/parties/Landlord/",
			"related": "/organisations/1/entities/"
			},
			"data": [
			  {
			"type": "entities",
			"id": "6948"
			}
			],
			},
			"Tenant": {
			"links": {
			"self": "/organisations/1/agreements/8061/relationships/parties/Tenant/",
			"related": "/organisations/1/entities/"
			},
			"data": [
			  {
			"type": "entities",
			"id": "6950"
			}
			],
			},
			"Guarantor": {
			"links": {
			"self": "/organisations/1/agreements/8061/relationships/parties/Guarantor/",
			"related": "/organisations/1/entities/"
			},
			"data": [
			  {
			"type": "entities",
			"id": "6951"
			}
			],
			}
			}
			}
			},
			  {
			"type": "agreements",
			"id": 7798,
			"attributes": {
			"insertedDate": 1421031571000,
			"insertedBy": 2,
			"updatedDate": 1461044425000,
			"knownAs": "Nomos House",
			"legalDescription": "The Legal description",
			"internalReferences": [],
			"jurisdiction": "New Zealand",
			"agreementType": "Lease",
			"client": "Landlord",
			"currency": "NZD",
			"commercial": "Yes",
			"agreementMode": "Active",
			"commencementDate": "1420027200000",
			"expiryDate": "1484395200000",
			"totalAnnualRent": "345.00",
			"rent": {
			"premises": {
			"annual": "3.00",
			"monthly": "0.25",
			"weekly": "0.06"
			},
			"carparks": {
			"annual": "342.00",
			"monthly": "28.50",
			"weekly": "6.58"
			}
			},
			"paymentPeriod": "Monthly",
			"rentPaymentDay": "1st",
			"rentPaymentMonth": "January",
			"rentDay": "Sunday",
			"taxation": "Incl. Tax",
			"defaultInterestRate": "20% per annum",
			"businessUse": "The business use is this.",
			"publicRiskInsuranceSum": "500001",
			"hoursOfAccess": "7am - 6pm",
			"airConditioningDays": "Mon-Fri",
			"airConditioningHours": "5am - 10pm",
			"bankGuaranteeSum": "5000000",
			"initialState": {
			"agreement": {
			"agreementId": "7798",
			"agreementType": "Lease",
			"client": "Landlord",
			"currency": "NZD",
			"commercial": "Yes",
			"agreementMode": "Active",
			"commencementDate": "1420027200000",
			"expiryDate": "1484395200000",
			"totalAnnualRent": "345.00",
			"rent": {
			"premises": {
			"annual": "3.00",
			"monthly": "0.25",
			"weekly": "0.06"
			},
			"carparks": {
			"annual": "342.00",
			"monthly": "28.50",
			"weekly": "6.58"
			}
			},
			"paymentPeriod": "Monthly",
			"rentPaymentDay": "1st",
			"rentPaymentMonth": "January",
			"rentDay": "Sunday",
			"taxation": "Incl. Tax",
			"defaultInterestRate": "20% per annum",
			"businessUse": "The business use is this.",
			"publicRiskInsuranceSum": "500001",
			"hoursOfAccess": "7am - 6pm",
			"airConditioningDays": "Mon-Fri",
			"airConditioningHours": "5am - 10pm",
			"bankGuaranteeSum": "5000000",
			"parties": {
			"Landlord": [
			  {
			"entityId": "214",
			"entityName": "Jill Maloney Trust"
			}
			],
			"Tenant": [
			  {
			"entityId": "213",
			"entityName": "Mr DAve Philip Bromley"
			}
			],
			}
			}
			}
			},
			"relationships": {
			"properties": {
			"links": {
			"self": "/organisations/1/agreements/7798/relationships/properties/",
			"related": "/organisations/1/properties/"
			},
			"data": [
			  {
			"type": "properties",
			"id": "4976"
			},
			  {
			"type": "properties",
			"id": "4975"
			}
			],
			},
			"notes": {
			"links": {
			"self": "/organisations/1/agreements/7798/relationships/notes/",
			"related": "/organisations/1/notes/"
			},
			"data": [
			  {
			"type": "notes",
			"id": 127
			},
			  {
			"type": "notes",
			"id": 110
			}
			],
			},
			"events": {
			"links": {
			"self": "/organisations/1/agreements/7798/relationships/events/",
			"related": "/organisations/1/events/"
			},
			"data": [
			  {
			"type": "events",
			"id": "28736"
			},
			  {
			"type": "events",
			"id": "28738"
			},
			  {
			"type": "events",
			"id": "28739"
			},
			  {
			"type": "events",
			"id": "28740"
			},
			  {
			"type": "events",
			"id": "28741"
			},
			  {
			"type": "events",
			"id": "42997"
			},
			  {
			"type": "events",
			"id": "44277"
			},
			  {
			"type": "events",
			"id": "44278"
			},
			  {
			"type": "events",
			"id": "44279"
			},
			  {
			"type": "events",
			"id": "44280"
			},
			  {
			"type": "events",
			"id": "44282"
			},
			  {
			"type": "events",
			"id": "44283"
			},
			  {
			"type": "events",
			"id": "44613"
			},
			  {
			"type": "events",
			"id": "45312"
			},
			  {
			"type": "events",
			"id": "45313"
			},
			  {
			"type": "events",
			"id": "45314"
			},
			  {
			"type": "events",
			"id": "45315"
			},
			  {
			"type": "events",
			"id": "45316"
			},
			  {
			"type": "events",
			"id": "45317"
			},
			  {
			"type": "events",
			"id": "45345"
			},
			  {
			"type": "events",
			"id": "45346"
			},
			  {
			"type": "events",
			"id": "45347"
			},
			  {
			"type": "events",
			"id": "45348"
			},
			  {
			"type": "events",
			"id": "45349"
			},
			  {
			"type": "events",
			"id": "45350"
			},
			  {
			"type": "events",
			"id": "45351"
			},
			  {
			"type": "events",
			"id": "45352"
			}
			],
			},
			"organisations": {
			"links": {
			"self": "/organisations/1/agreements/7798/relationships/organisations/",
			"related": "/organisations/"
			},
			"data": [
			  {
			"type": "organisations",
			"id": "1"
			}
			],
			},
			"parties": {
			"Landlord": {
			"links": {
			"self": "/organisations/1/agreements/7798/relationships/parties/Landlord/",
			"related": "/organisations/1/entities/"
			},
			"data": [
			  {
			"type": "entities",
			"id": "214"
			}
			],
			},
			"Tenant": {
			"links": {
			"self": "/organisations/1/agreements/7798/relationships/parties/Tenant/",
			"related": "/organisations/1/entities/"
			},
			"data": [
			  {
			"type": "entities",
			"id": "213"
			}
			],
			}
			}
			}
			},
			  {
			"type": "agreements",
			"id": 44569,
			"attributes": {
			"insertedDate": 1447635816000,
			"insertedBy": 2,
			"updatedDate": 1461044426000,
			"knownAs": "Nomos One Deed of Lease ",
			"legalDescription": "All that area outlined in blue on the attached plan that was a night club back in the day. ",
			"internalReferences": [],
			"jurisdiction": "New Zealand",
			"agreementType": "Lease",
			"client": "Landlord",
			"currency": "NZD",
			"commercial": "Yes",
			"agreementMode": "Active",
			"commencementDate": "1448280000000",
			"expiryDate": "1921579200000",
			"totalAnnualRent": "40000.00",
			"rent": {
			"premises": {
			"annual": "35000.00",
			"monthly": "2916.67",
			"weekly": "673.08"
			},
			"carparks": {
			"annual": "5000.00",
			"monthly": "416.67",
			"weekly": "96.15"
			}
			},
			"paymentStartDate": "1448193600000",
			"paymentPeriod": "Monthly",
			"rentPaymentDay": "1st",
			"rentPaymentMonth": "January",
			"rentDay": "Sunday",
			"taxation": "Plus Tax",
			"proportionOfOutgoings": "100%",
			"defaultInterestRate": "15%",
			"businessUse": "Nomos One HQ",
			"originalDeedMadeDate": "1448280000000",
			"initialState": {
			"agreement": {
			"agreementId": "44569",
			"agreementType": "Lease",
			"client": "Landlord",
			"currency": "NZD",
			"commercial": "Yes",
			"agreementMode": "Active",
			"commencementDate": "1448280000000",
			"expiryDate": "1921579200000",
			"totalAnnualRent": "40000.00",
			"rent": {
			"premises": {
			"annual": "35000.00",
			"monthly": "2916.67",
			"weekly": "673.08"
			},
			"carparks": {
			"annual": "5000.00",
			"monthly": "416.67",
			"weekly": "96.15"
			}
			},
			"paymentStartDate": "1448193600000",
			"paymentPeriod": "Monthly",
			"rentPaymentDay": "1st",
			"rentPaymentMonth": "January",
			"rentDay": "Sunday",
			"taxation": "Plus Tax",
			"proportionOfOutgoings": "100%",
			"defaultInterestRate": "15%",
			"businessUse": "Nomos One HQ",
			"originalDeedMadeDate": "1448280000000",
			"parties": {
			"Tenant": [
			  {
			"entityId": "12512",
			"entityName": "Nomos User"
			}
			],
			"Guarantor": [
			  {
			"entityId": "12513",
			"entityName": "Richie Rich"
			}
			],
			"Landlord": [
			  {
			"entityId": "12510",
			"entityName": "Nomos One Limited"
			}
			],
			}
			}
			}
			},
			"relationships": {
			"properties": {
			"links": {
			"self": "/organisations/1/agreements/44569/relationships/properties/",
			"related": "/organisations/1/properties/"
			},
			"data": [
			  {
			"type": "properties",
			"id": "5005"
			},
			  {
			"type": "properties",
			"id": "5004"
			},
			  {
			"type": "properties",
			"id": "3168"
			}
			],
			},
			"events": {
			"links": {
			"self": "/organisations/1/agreements/44569/relationships/events/",
			"related": "/organisations/1/events/"
			},
			"data": [
			  {
			"type": "events",
			"id": "112800"
			},
			  {
			"type": "events",
			"id": "112801"
			},
			  {
			"type": "events",
			"id": "112808"
			},
			  {
			"type": "events",
			"id": "112809"
			},
			  {
			"type": "events",
			"id": "112811"
			},
			  {
			"type": "events",
			"id": "112814"
			},
			  {
			"type": "events",
			"id": "112815"
			},
			  {
			"type": "events",
			"id": "112818"
			},
			  {
			"type": "events",
			"id": "112820"
			},
			  {
			"type": "events",
			"id": "112821"
			},
			  {
			"type": "events",
			"id": "112822"
			},
			  {
			"type": "events",
			"id": "112824"
			},
			  {
			"type": "events",
			"id": "112826"
			},
			  {
			"type": "events",
			"id": "112828"
			},
			  {
			"type": "events",
			"id": "112830"
			},
			  {
			"type": "events",
			"id": "112832"
			},
			  {
			"type": "events",
			"id": "112834"
			}
			],
			},
			"organisations": {
			"links": {
			"self": "/organisations/1/agreements/44569/relationships/organisations/",
			"related": "/organisations/"
			},
			"data": [
			  {
			"type": "organisations",
			"id": "1"
			}
			],
			},
			"parties": {
			"Tenant": {
			"links": {
			"self": "/organisations/1/agreements/44569/relationships/parties/Tenant/",
			"related": "/organisations/1/entities/"
			},
			"data": [
			  {
			"type": "entities",
			"id": "12512"
			}
			],
			},
			"Guarantor": {
			"links": {
			"self": "/organisations/1/agreements/44569/relationships/parties/Guarantor/",
			"related": "/organisations/1/entities/"
			},
			"data": [
			  {
			"type": "entities",
			"id": "12513"
			}
			],
			},
			"Landlord": {
			"links": {
			"self": "/organisations/1/agreements/44569/relationships/parties/Landlord/",
			"related": "/organisations/1/entities/"
			},
			"data": [
			  {
			"type": "entities",
			"id": "12510"
			}
			],
			}
			}
			}
			},
			  {
			"type": "agreements",
			"id": 8180,
			"attributes": {
			"insertedDate": 1429652099000,
			"insertedBy": 2,
			"updatedDate": 1461044425000,
			"knownAs": "Post move live",
			"internalReferences": [],
			"jurisdiction": "New Zealand",
			"agreementType": "Lease",
			"client": "Landlord",
			"currency": "NZD",
			"commercial": "Yes",
			"agreementMode": "Active",
			"commencementDate": "1333195200000",
			"expiryDate": "1459339200000",
			"totalAnnualRent": "9000.00",
			"rent": {
			"premises": {
			"annual": "8000.00",
			"monthly": "666.67",
			"weekly": "153.85"
			},
			"carparks": {
			"annual": "1000.00",
			"monthly": "83.33",
			"weekly": "19.23"
			}
			},
			"paymentStartDate": "1333195200000",
			"paymentPeriod": "Monthly",
			"rentPaymentDay": "1st",
			"rentPaymentMonth": "January",
			"rentDay": "Sunday",
			"taxation": "Plus Tax",
			"initialState": {
			"agreement": {
			"agreementId": "8180",
			"agreementType": "Lease",
			"client": "Landlord",
			"currency": "NZD",
			"commercial": "Yes",
			"agreementMode": "Active",
			"commencementDate": "1333195200000",
			"expiryDate": "1459339200000",
			"totalAnnualRent": "9000.00",
			"rent": {
			"premises": {
			"annual": "8000.00",
			"monthly": "666.67",
			"weekly": "153.85"
			},
			"carparks": {
			"annual": "1000.00",
			"monthly": "83.33",
			"weekly": "19.23"
			}
			},
			"paymentStartDate": "1333195200000",
			"paymentPeriod": "Monthly",
			"rentPaymentDay": "1st",
			"rentPaymentMonth": "January",
			"rentDay": "Sunday",
			"taxation": "Plus Tax",
			"parties": {
			"Landlord": [
			  {
			"entityId": "7114",
			"entityName": "A new company"
			}
			],
			"Tenant": [
			  {
			"entityId": "7115",
			"entityName": "A new trust"
			}
			],
			}
			}
			}
			},
			"relationships": {
			"properties": {
			"links": {
			"self": "/organisations/1/agreements/8180/relationships/properties/",
			"related": "/organisations/1/properties/"
			},
			"data": [
			  {
			"type": "properties",
			"id": "1696"
			}
			],
			},
			"events": {
			"links": {
			"self": "/organisations/1/agreements/8180/relationships/events/",
			"related": "/organisations/1/events/"
			},
			"data": [
			  {
			"type": "events",
			"id": "47552"
			},
			  {
			"type": "events",
			"id": "47553"
			},
			  {
			"type": "events",
			"id": "47555"
			},
			  {
			"type": "events",
			"id": "47556"
			},
			  {
			"type": "events",
			"id": "47558"
			},
			  {
			"type": "events",
			"id": "47559"
			},
			  {
			"type": "events",
			"id": "47560"
			},
			  {
			"type": "events",
			"id": "47561"
			}
			],
			},
			"organisations": {
			"links": {
			"self": "/organisations/1/agreements/8180/relationships/organisations/",
			"related": "/organisations/"
			},
			"data": [
			  {
			"type": "organisations",
			"id": "1"
			}
			],
			},
			"parties": {
			"Landlord": {
			"links": {
			"self": "/organisations/1/agreements/8180/relationships/parties/Landlord/",
			"related": "/organisations/1/entities/"
			},
			"data": [
			  {
			"type": "entities",
			"id": "7114"
			}
			],
			},
			"Tenant": {
			"links": {
			"self": "/organisations/1/agreements/8180/relationships/parties/Tenant/",
			"related": "/organisations/1/entities/"
			},
			"data": [
			  {
			"type": "entities",
			"id": "7115"
			}
			],
			}
			}
			}
			},
			  {
			"type": "agreements",
			"id": 9979,
			"attributes": {
			"insertedDate": 1439782652000,
			"insertedBy": 2,
			"updatedDate": 1461104695000,
			"updatedBy": 2,
			"knownAs": "Rent changes test",
			"internalReferences": [],
			"jurisdiction": "New Zealand",
			"agreementType": "Lease",
			"client": "Landlord",
			"currency": "NZD",
			"commercial": "Yes",
			"agreementMode": "Active",
			"commencementDate": "1280577600000",
			"expiryDate": "1532952000000",
			"totalAnnualRent": "5000.00",
			"rent": {
			"premises": {
			"annual": "5000.00",
			"monthly": "416.67",
			"weekly": "96.15"
			},
			"carparks": {
			"annual": "0.00",
			"monthly": "0.00",
			"weekly": "0.00"
			}
			},
			"paymentStartDate": "1280577600000",
			"paymentPeriod": "Quarterly",
			"rentPaymentDay": "1st",
			"rentPaymentMonth": "January",
			"rentDay": "Sunday",
			"taxation": "Plus Tax",
			"initialState": {
			"agreement": {
			"agreementId": "9979",
			"agreementType": "Lease",
			"client": "Landlord",
			"currency": "NZD",
			"commercial": "Yes",
			"agreementMode": "Active",
			"commencementDate": "1280577600000",
			"expiryDate": "1532952000000",
			"totalAnnualRent": "5000.00",
			"rent": {
			"premises": {
			"annual": "5000.00",
			"monthly": "416.67",
			"weekly": "96.15"
			},
			"carparks": {
			"annual": "0.00",
			"monthly": "0.00",
			"weekly": "0.00"
			}
			},
			"paymentStartDate": "1280577600000",
			"paymentPeriod": "Quarterly",
			"rentPaymentDay": "1st",
			"rentPaymentMonth": "January",
			"rentDay": "Sunday",
			"taxation": "Plus Tax",
			"parties": {
			"Landlord": [
			  {
			"entityId": "7705",
			"entityName": "Pah pah ltd"
			}
			],
			"Tenant": [
			  {
			"entityId": "7703",
			"entityName": "test dave"
			}
			],
			}
			}
			}
			},
			"relationships": {
			"properties": {
			"links": {
			"self": "/organisations/1/agreements/9979/relationships/properties/",
			"related": "/organisations/1/properties/"
			},
			"data": [
			  {
			"type": "properties",
			"id": "2537"
			}
			],
			},
			"events": {
			"links": {
			"self": "/organisations/1/agreements/9979/relationships/events/",
			"related": "/organisations/1/events/"
			},
			"data": [
			  {
			"type": "events",
			"id": "89034"
			},
			  {
			"type": "events",
			"id": "89035"
			},
			  {
			"type": "events",
			"id": "89037"
			},
			  {
			"type": "events",
			"id": "89042"
			},
			  {
			"type": "events",
			"id": "89046"
			},
			  {
			"type": "events",
			"id": "89050"
			}
			],
			},
			"organisations": {
			"links": {
			"self": "/organisations/1/agreements/9979/relationships/organisations/",
			"related": "/organisations/"
			},
			"data": [
			  {
			"type": "organisations",
			"id": "1"
			}
			],
			},
			"parties": {
			"Landlord": {
			"links": {
			"self": "/organisations/1/agreements/9979/relationships/parties/Landlord/",
			"related": "/organisations/1/entities/"
			},
			"data": [
			  {
			"type": "entities",
			"id": "7705"
			}
			],
			},
			"Tenant": {
			"links": {
			"self": "/organisations/1/agreements/9979/relationships/parties/Tenant/",
			"related": "/organisations/1/entities/"
			},
			"data": [
			  {
			"type": "entities",
			"id": "7703"
			}
			],
			}
			}
			}
			},
			  {
			"type": "agreements",
			"id": 15163,
			"attributes": {
			"insertedDate": 1440556218000,
			"insertedBy": 2,
			"updatedDate": 1461044426000,
			"knownAs": "TEst for ken",
			"internalReferences": [],
			"jurisdiction": "New Zealand",
			"agreementType": "Lease",
			"client": "Landlord",
			"currency": "NZD",
			"commercial": "Yes",
			"agreementMode": "Active",
			"commencementDate": "1249041600000",
			"expiryDate": "1596110400000",
			"totalAnnualRent": "78000.00",
			"rent": {
			"premises": {
			"annual": "78000.00",
			"monthly": "6500.00",
			"weekly": "1500.00"
			},
			"carparks": {
			"annual": "0.00",
			"monthly": "0.00",
			"weekly": "0.00"
			}
			},
			"paymentStartDate": "1249041600000",
			"paymentPeriod": "Monthly",
			"rentPaymentDay": "1st",
			"rentPaymentMonth": "January",
			"rentDay": "Sunday",
			"taxation": "Plus Tax",
			"initialState": {
			"agreement": {
			"agreementId": "15163",
			"agreementType": "Lease",
			"client": "Landlord",
			"currency": "NZD",
			"commercial": "Yes",
			"agreementMode": "Active",
			"commencementDate": "1249041600000",
			"expiryDate": "1596110400000",
			"totalAnnualRent": "78000.00",
			"rent": {
			"premises": {
			"annual": "78000.00",
			"monthly": "6500.00",
			"weekly": "1500.00"
			},
			"carparks": {
			"annual": "0.00",
			"monthly": "0.00",
			"weekly": "0.00"
			}
			},
			"paymentStartDate": "1249041600000",
			"paymentPeriod": "Monthly",
			"rentPaymentDay": "1st",
			"rentPaymentMonth": "January",
			"rentDay": "Sunday",
			"taxation": "Plus Tax",
			"parties": {
			"Landlord": [
			  {
			"entityId": "517",
			"entityName": "Mr ASB"
			}
			],
			"Tenant": [
			  {
			"entityId": "214",
			"entityName": "Jill Maloney Trust"
			}
			],
			}
			}
			}
			},
			"relationships": {
			"properties": {
			"links": {
			"self": "/organisations/1/agreements/15163/relationships/properties/",
			"related": "/organisations/1/properties/"
			},
			"data": [
			  {
			"type": "properties",
			"id": "2660"
			}
			],
			},
			"events": {
			"links": {
			"self": "/organisations/1/agreements/15163/relationships/events/",
			"related": "/organisations/1/events/"
			},
			"data": [
			  {
			"type": "events",
			"id": "93060"
			},
			  {
			"type": "events",
			"id": "93061"
			},
			  {
			"type": "events",
			"id": "93067"
			},
			  {
			"type": "events",
			"id": "93068"
			},
			  {
			"type": "events",
			"id": "93070"
			},
			  {
			"type": "events",
			"id": "93071"
			},
			  {
			"type": "events",
			"id": "93073"
			},
			  {
			"type": "events",
			"id": "93074"
			},
			  {
			"type": "events",
			"id": "94014"
			},
			  {
			"type": "events",
			"id": "169973"
			},
			  {
			"type": "events",
			"id": "169987"
			},
			  {
			"type": "events",
			"id": "169989"
			},
			  {
			"type": "events",
			"id": "169992"
			},
			  {
			"type": "events",
			"id": "169994"
			}
			],
			},
			"organisations": {
			"links": {
			"self": "/organisations/1/agreements/15163/relationships/organisations/",
			"related": "/organisations/"
			},
			"data": [
			  {
			"type": "organisations",
			"id": "1"
			}
			],
			},
			"parties": {
			"Landlord": {
			"links": {
			"self": "/organisations/1/agreements/15163/relationships/parties/Landlord/",
			"related": "/organisations/1/entities/"
			},
			"data": [
			  {
			"type": "entities",
			"id": "517"
			}
			],
			},
			"Tenant": {
			"links": {
			"self": "/organisations/1/agreements/15163/relationships/parties/Tenant/",
			"related": "/organisations/1/entities/"
			},
			"data": [
			  {
			"type": "entities",
			"id": "214"
			}
			],
			}
			}
			}
			},
			  {
			"type": "agreements",
			"id": 8120,
			"attributes": {
			"insertedDate": 1427245654000,
			"insertedBy": 2,
			"updatedDate": 1461044425000,
			"knownAs": "THE KENNEK MANSION 2",
			"legalDescription": "The building situated on number 1 Bath Street Dunedin and all of its carparks and restrooms",
			"internalReferences": [
			  "XPOAS"
			],
			"jurisdiction": "New Zealand",
			"agreementType": "Lease",
			"client": "Landlord",
			"currency": "NZD",
			"commercial": "Yes",
			"agreementMode": "Active",
			"commencementDate": "1427284800000",
			"expiryDate": "1900584000000",
			"totalAnnualRent": "6002451.00",
			"rent": {
			"premises": {
			"annual": "6000000.00",
			"monthly": "500000.00",
			"weekly": "115384.62"
			},
			"carparks": {
			"annual": "2451.00",
			"monthly": "204.25",
			"weekly": "47.13"
			}
			},
			"paymentStartDate": "1427284800000",
			"paymentPeriod": "Monthly",
			"rentPaymentDay": "4th",
			"rentPaymentMonth": "January",
			"rentDay": "Sunday",
			"taxation": "Incl. Tax",
			"proportionOfOutgoings": "20%",
			"additionalRent": "50%",
			"defaultInterestRate": "15%",
			"fileNotes": "Note about some files",
			"businessUse": "The KENNEK mansion might be used for any business purposes",
			"publicRiskInsuranceSum": "5,000,000",
			"hoursOfAccess": "1024",
			"airConditioningDays": "200",
			"airConditioningHours": "15 hours per day",
			"bankGuaranteeSum": "90,000,000",
			"initialState": {
			"agreement": {
			"agreementId": "8120",
			"agreementType": "Lease",
			"client": "Landlord",
			"currency": "NZD",
			"commercial": "Yes",
			"agreementMode": "Active",
			"commencementDate": "1427284800000",
			"expiryDate": "1900584000000",
			"totalAnnualRent": "6002451.00",
			"rent": {
			"premises": {
			"annual": "6000000.00",
			"monthly": "500000.00",
			"weekly": "115384.62"
			},
			"carparks": {
			"annual": "2451.00",
			"monthly": "204.25",
			"weekly": "47.13"
			}
			},
			"paymentStartDate": "1427284800000",
			"paymentPeriod": "Monthly",
			"rentPaymentDay": "4th",
			"rentPaymentMonth": "January",
			"rentDay": "Sunday",
			"taxation": "Incl. Tax",
			"proportionOfOutgoings": "20%",
			"additionalRent": "50%",
			"defaultInterestRate": "15%",
			"fileNotes": "Note about some files",
			"businessUse": "The KENNEK mansion might be used for any business purposes",
			"publicRiskInsuranceSum": "5,000,000",
			"hoursOfAccess": "1024",
			"airConditioningDays": "200",
			"airConditioningHours": "15 hours per day",
			"bankGuaranteeSum": "90,000,000",
			"parties": {
			"Tenant": [
			  {
			"entityId": "6946",
			"entityName": "Superman"
			},
			  {
			"entityId": 7039,
			"entityName": "THE KENNEK TRUST"
			}
			],
			"Landlord": [
			  {
			"entityId": "6946",
			"entityName": "Superman"
			},
			  {
			"entityId": 6947,
			"entityName": "Spiderman"
			}
			],
			"Guarantor": [
			  {
			"entityId": "6951",
			"entityName": "Trusting Trustees Trust"
			}
			],
			}
			}
			}
			},
			"relationships": {
			"properties": {
			"links": {
			"self": "/organisations/1/agreements/8120/relationships/properties/",
			"related": "/organisations/1/properties/"
			},
			"data": [
			  {
			"type": "properties",
			"id": "5002"
			},
			  {
			"type": "properties",
			"id": "5001"
			},
			  {
			"type": "properties",
			"id": "1661"
			}
			],
			},
			"events": {
			"links": {
			"self": "/organisations/1/agreements/8120/relationships/events/",
			"related": "/organisations/1/events/"
			},
			"data": [
			  {
			"type": "events",
			"id": "45572"
			},
			  {
			"type": "events",
			"id": "45615"
			},
			  {
			"type": "events",
			"id": "46360"
			},
			  {
			"type": "events",
			"id": "46361"
			},
			  {
			"type": "events",
			"id": "46362"
			},
			  {
			"type": "events",
			"id": "46363"
			},
			  {
			"type": "events",
			"id": "46364"
			},
			  {
			"type": "events",
			"id": "46365"
			},
			  {
			"type": "events",
			"id": "46366"
			},
			  {
			"type": "events",
			"id": "46367"
			},
			  {
			"type": "events",
			"id": "46368"
			},
			  {
			"type": "events",
			"id": "46369"
			},
			  {
			"type": "events",
			"id": "46370"
			},
			  {
			"type": "events",
			"id": "46371"
			},
			  {
			"type": "events",
			"id": "46372"
			},
			  {
			"type": "events",
			"id": "46373"
			},
			  {
			"type": "events",
			"id": "46374"
			},
			  {
			"type": "events",
			"id": "46375"
			},
			  {
			"type": "events",
			"id": "46376"
			},
			  {
			"type": "events",
			"id": "46377"
			},
			  {
			"type": "events",
			"id": "46378"
			},
			  {
			"type": "events",
			"id": "46379"
			},
			  {
			"type": "events",
			"id": "46380"
			},
			  {
			"type": "events",
			"id": "46381"
			},
			  {
			"type": "events",
			"id": "46921"
			}
			],
			},
			"organisations": {
			"links": {
			"self": "/organisations/1/agreements/8120/relationships/organisations/",
			"related": "/organisations/"
			},
			"data": [
			  {
			"type": "organisations",
			"id": "1"
			}
			],
			},
			"parties": {
			"Tenant": {
			"links": {
			"self": "/organisations/1/agreements/8120/relationships/parties/Tenant/",
			"related": "/organisations/1/entities/"
			},
			"data": [
			  {
			"type": "entities",
			"id": "6946"
			},
			  {
			"type": "entities",
			"id": 7039
			}
			],
			},
			"Landlord": {
			"links": {
			"self": "/organisations/1/agreements/8120/relationships/parties/Landlord/",
			"related": "/organisations/1/entities/"
			},
			"data": [
			  {
			"type": "entities",
			"id": "6946"
			},
			  {
			"type": "entities",
			"id": 6947
			}
			],
			},
			"Guarantor": {
			"links": {
			"self": "/organisations/1/agreements/8120/relationships/parties/Guarantor/",
			"related": "/organisations/1/entities/"
			},
			"data": [
			  {
			"type": "entities",
			"id": "6951"
			}
			],
			}
			},
			"notFollowing": {
			"users": {
			"links": {
			"self": "/organisations/1/agreements/8120/relationships/notFollowing/users/",
			"related": "/users/"
			},
			"data": [
			  {
			"type": "users",
			"id": "4"
			},
			  {
			"type": "users",
			"id": "8"
			},
			  {
			"type": "users",
			"id": "58"
			},
			  {
			"type": "users",
			"id": "59"
			},
			  {
			"type": "users",
			"id": "226"
			}
			],
			}
			}
			}
			},
			  {
			"type": "agreements",
			"id": 35455,
			"attributes": {
			"insertedDate": 1445219808000,
			"insertedBy": 2,
			"updatedDate": 1461044426000,
			"knownAs": "Test Sublessor sigs",
			"legalDescription": "as dasd asd sa d ",
			"internalReferences": [],
			"jurisdiction": "New Zealand",
			"agreementType": "Sublease",
			"client": "HeadLessor",
			"currency": "NZD",
			"commercial": "Yes",
			"agreementMode": "Active",
			"totalAnnualRent": "31000.00",
			"rent": {
			"premises": {
			"annual": "30000.00",
			"monthly": "2500.00",
			"weekly": "576.92"
			},
			"carparks": {
			"annual": "1000.00",
			"monthly": "83.33",
			"weekly": "19.23"
			}
			},
			"paymentStartDate": "1443614400000",
			"paymentPeriod": "Monthly",
			"rentPaymentDay": "1st",
			"rentPaymentMonth": "January",
			"rentDay": "Sunday",
			"taxation": "Plus Tax",
			"proportionOfOutgoings": "sdSD sfr wewe",
			"additionalRent": "sadasd",
			"defaultInterestRate": "sadSD sdS",
			"fileNotes": "cxg fdgdfg zg",
			"businessUse": " rgadfgsdfg",
			"publicRiskInsuranceSum": " fdgdfg",
			"hoursOfAccess": "fdgfg",
			"airConditioningDays": "fdg dfg",
			"airConditioningHours": "adfgdfg",
			"bankGuaranteeSum": "dfgfdg",
			"originalDeedMadeDate": "1443614400000",
			"initialState": {
			"agreement": {
			"agreementId": "35455",
			"agreementType": "Sublease",
			"client": "HeadLessor",
			"currency": "NZD",
			"commercial": "Yes",
			"agreementMode": "Inactive",
			"totalAnnualRent": "31000.00",
			"rent": {
			"premises": {
			"annual": "30000.00",
			"monthly": "2500.00",
			"weekly": "576.92"
			},
			"carparks": {
			"annual": "1000.00",
			"monthly": "83.33",
			"weekly": "19.23"
			}
			},
			"paymentStartDate": "1443614400000",
			"paymentPeriod": "Monthly",
			"rentPaymentDay": "1st",
			"rentPaymentMonth": "January",
			"rentDay": "Sunday",
			"taxation": "Plus Tax",
			"proportionOfOutgoings": "sdSD sfr wewe",
			"additionalRent": "sadasd",
			"defaultInterestRate": "sadSD sdS",
			"fileNotes": "cxg fdgdfg zg",
			"businessUse": " rgadfgsdfg",
			"publicRiskInsuranceSum": " fdgdfg",
			"hoursOfAccess": "fdgfg",
			"airConditioningDays": "fdg dfg",
			"airConditioningHours": "adfgdfg",
			"bankGuaranteeSum": "dfgfdg",
			"originalDeedMadeDate": "1443614400000",
			"parties": {
			"Head Lessor": [
			  {
			"entityId": "7114",
			"entityName": "A new company"
			}
			],
			"Sub Lessor": [
			  {
			"entityId": "7476",
			"entityName": "Another Company"
			}
			],
			"Sub Lessee": [
			  {
			"entityId": "214",
			"entityName": "Jill Maloney Trust"
			}
			],
			"Guarantor": [
			  {
			"entityId": "517",
			"entityName": "Mr ASB"
			}
			],
			}
			}
			},
			"commencementDate": "1443614400000",
			"expiryDate": "1569758400000"
			},
			"relationships": {
			"properties": {
			"links": {
			"self": "/organisations/1/agreements/35455/relationships/properties/",
			"related": "/organisations/1/properties/"
			},
			"data": [
			  {
			"type": "properties",
			"id": "13111"
			},
			  {
			"type": "properties",
			"id": "4996"
			}
			],
			},
			"events": {
			"links": {
			"self": "/organisations/1/agreements/35455/relationships/events/",
			"related": "/organisations/1/events/"
			},
			"data": [
			  {
			"type": "events",
			"id": "106682"
			},
			  {
			"type": "events",
			"id": "106683"
			},
			  {
			"type": "events",
			"id": "106686"
			},
			  {
			"type": "events",
			"id": "106690"
			},
			  {
			"type": "events",
			"id": "106692"
			}
			],
			},
			"organisations": {
			"links": {
			"self": "/organisations/1/agreements/35455/relationships/organisations/",
			"related": "/organisations/"
			},
			"data": [
			  {
			"type": "organisations",
			"id": "1"
			}
			],
			},
			"parties": {
			"Head Lessor": {
			"links": {
			"self": "/organisations/1/agreements/35455/relationships/parties/Head Lessor/",
			"related": "/organisations/1/entities/"
			},
			"data": [
			  {
			"type": "entities",
			"id": "7114"
			}
			],
			},
			"Sub Lessor": {
			"links": {
			"self": "/organisations/1/agreements/35455/relationships/parties/Sub Lessor/",
			"related": "/organisations/1/entities/"
			},
			"data": [
			  {
			"type": "entities",
			"id": "7476"
			}
			],
			},
			"Sub Lessee": {
			"links": {
			"self": "/organisations/1/agreements/35455/relationships/parties/Sub Lessee/",
			"related": "/organisations/1/entities/"
			},
			"data": [
			  {
			"type": "entities",
			"id": "214"
			}
			],
			},
			"Guarantor": {
			"links": {
			"self": "/organisations/1/agreements/35455/relationships/parties/Guarantor/",
			"related": "/organisations/1/entities/"
			},
			"data": [
			  {
			"type": "entities",
			"id": "517"
			}
			],
			}
			}
			}
			},
			  {
			"type": "agreements",
			"id": 8313,
			"attributes": {
			"insertedDate": 1431480108000,
			"insertedBy": 2,
			"updatedDate": 1461044425000,
			"knownAs": "Test if Legal saves",
			"legalDescription": "Test Legal Description",
			"internalReferences": [],
			"jurisdiction": "New Zealand",
			"agreementType": "Lease",
			"client": "Landlord",
			"currency": "NZD",
			"commercial": "Yes",
			"agreementMode": "Inactive",
			"commencementDate": "1433073600000",
			"totalAnnualRent": "0.00",
			"rent": {
			"premises": {
			"annual": "0.00",
			"monthly": "0.00",
			"weekly": "0.00"
			},
			"carparks": {
			"annual": "0.00",
			"monthly": "0.00",
			"weekly": "0.00"
			}
			},
			"paymentPeriod": "Monthly",
			"rentPaymentDay": "1st",
			"rentPaymentMonth": "January",
			"rentDay": "Sunday",
			"taxation": "Plus Tax",
			"initialState": {
			"agreement": {
			"agreementId": "8313",
			"agreementType": "Lease",
			"client": "Landlord",
			"currency": "NZD",
			"commercial": "Yes",
			"agreementMode": "Inactive",
			"commencementDate": "1433073600000",
			"totalAnnualRent": "0.00",
			"rent": {
			"premises": {
			"annual": "0.00",
			"monthly": "0.00",
			"weekly": "0.00"
			},
			"carparks": {
			"annual": "0.00",
			"monthly": "0.00",
			"weekly": "0.00"
			}
			},
			"paymentPeriod": "Monthly",
			"rentPaymentDay": "1st",
			"rentPaymentMonth": "January",
			"rentDay": "Sunday",
			"taxation": "Plus Tax",
			"parties": {
			"Landlord": [
			  {
			"entityId": "6946",
			"entityName": "Superman"
			}
			],
			"Tenant": [
			  {
			"entityId": "6947",
			"entityName": "Spiderman"
			}
			],
			"Guarantor": [
			  {
			"entityId": "436",
			"entityName": "Mr Fred Bloggs"
			}
			],
			}
			}
			}
			},
			"relationships": {
			"properties": {
			"links": {
			"self": "/organisations/1/agreements/8313/relationships/properties/",
			"related": "/organisations/1/properties/"
			},
			"data": [
			  {
			"type": "properties",
			"id": "13003"
			},
			  {
			"type": "properties",
			"id": "4994"
			},
			  {
			"type": "properties",
			"id": "1783"
			}
			],
			},
			"events": {
			"links": {
			"self": "/organisations/1/agreements/8313/relationships/events/",
			"related": "/organisations/1/events/"
			},
			"data": [
			  {
			"type": "events",
			"id": "51468"
			}
			],
			},
			"organisations": {
			"links": {
			"self": "/organisations/1/agreements/8313/relationships/organisations/",
			"related": "/organisations/"
			},
			"data": [
			  {
			"type": "organisations",
			"id": "1"
			}
			],
			},
			"parties": {
			"Landlord": {
			"links": {
			"self": "/organisations/1/agreements/8313/relationships/parties/Landlord/",
			"related": "/organisations/1/entities/"
			},
			"data": [
			  {
			"type": "entities",
			"id": "6946"
			}
			],
			},
			"Tenant": {
			"links": {
			"self": "/organisations/1/agreements/8313/relationships/parties/Tenant/",
			"related": "/organisations/1/entities/"
			},
			"data": [
			  {
			"type": "entities",
			"id": "6947"
			}
			],
			},
			"Guarantor": {
			"links": {
			"self": "/organisations/1/agreements/8313/relationships/parties/Guarantor/",
			"related": "/organisations/1/entities/"
			},
			"data": [
			  {
			"type": "entities",
			"id": "436"
			}
			],
			}
			}
			}
			},
			  {
			"type": "agreements",
			"id": 36763,
			"attributes": {
			"insertedDate": 1445494346000,
			"insertedBy": 2,
			"updatedDate": 1461044427000,
			"knownAs": "Test of merge button",
			"internalReferences": [],
			"jurisdiction": "New Zealand",
			"agreementType": "Lease",
			"client": "Landlord",
			"currency": "NZD",
			"commercial": "Yes",
			"agreementMode": "Inactive",
			"totalAnnualRent": "5000.00",
			"rent": {
			"premises": {
			"annual": "5000.00",
			"monthly": "416.67",
			"weekly": "96.15"
			},
			"carparks": {
			"annual": "0.00",
			"monthly": "0.00",
			"weekly": "0.00"
			}
			},
			"paymentStartDate": "1349006400000",
			"paymentPeriod": "Monthly",
			"rentPaymentDay": "1st",
			"rentPaymentMonth": "January",
			"rentDay": "Sunday",
			"taxation": "Plus Tax",
			"initialState": {
			"agreement": {
			"agreementId": "36763",
			"agreementType": "Lease",
			"client": "Landlord",
			"currency": "NZD",
			"commercial": "Yes",
			"agreementMode": "Inactive",
			"totalAnnualRent": "5000.00",
			"rent": {
			"premises": {
			"annual": "5000.00",
			"monthly": "416.67",
			"weekly": "96.15"
			},
			"carparks": {
			"annual": "0.00",
			"monthly": "0.00",
			"weekly": "0.00"
			}
			},
			"paymentStartDate": "1349006400000",
			"paymentPeriod": "Monthly",
			"rentPaymentDay": "1st",
			"rentPaymentMonth": "January",
			"rentDay": "Sunday",
			"taxation": "Plus Tax",
			"parties": {
			"Landlord": [
			  {
			"entityId": "6435",
			"entityName": "DAveo ltd"
			}
			],
			"Tenant": [
			  {
			"entityId": "214",
			"entityName": "Jill Maloney Trust"
			}
			],
			}
			}
			},
			"commencementDate": "1349006400000",
			"expiryDate": "1632916800000"
			},
			"relationships": {
			"properties": {
			"links": {
			"self": "/organisations/1/agreements/36763/relationships/properties/",
			"related": "/organisations/1/properties/"
			},
			"data": [
			  {
			"type": "properties",
			"id": "3082"
			}
			],
			},
			"events": {
			"links": {
			"self": "/organisations/1/agreements/36763/relationships/events/",
			"related": "/organisations/1/events/"
			},
			"data": [
			  {
			"type": "events",
			"id": "107527"
			},
			  {
			"type": "events",
			"id": "107528"
			},
			  {
			"type": "events",
			"id": "107530"
			},
			  {
			"type": "events",
			"id": "107532"
			}
			],
			},
			"organisations": {
			"links": {
			"self": "/organisations/1/agreements/36763/relationships/organisations/",
			"related": "/organisations/"
			},
			"data": [
			  {
			"type": "organisations",
			"id": "1"
			}
			],
			},
			"parties": {
			"Landlord": {
			"links": {
			"self": "/organisations/1/agreements/36763/relationships/parties/Landlord/",
			"related": "/organisations/1/entities/"
			},
			"data": [
			  {
			"type": "entities",
			"id": "6435"
			}
			],
			},
			"Tenant": {
			"links": {
			"self": "/organisations/1/agreements/36763/relationships/parties/Tenant/",
			"related": "/organisations/1/entities/"
			},
			"data": [
			  {
			"type": "entities",
			"id": "214"
			}
			],
			}
			}
			}
			},
			  {
			"type": "agreements",
			"id": 8119,
			"attributes": {
			"insertedDate": 1427241819000,
			"insertedBy": 2,
			"updatedDate": 1461044426000,
			"knownAs": "Test of wednesday",
			"legalDescription": "Basement, 184 Karangahape Road, Newton more particularly outlined in green on the attached plan excluding the area on the plan coloured yellow and defined as the Landlord's Space&quot;.",
			"internalReferences": [],
			"jurisdiction": "New Zealand",
			"agreementType": "Lease",
			"client": "Landlord",
			"currency": "NZD",
			"commercial": "Yes",
			"agreementMode": "Active",
			"commencementDate": "954504000000",
			"expiryDate": "1080648000000",
			"totalAnnualRent": "0.00",
			"rent": {
			"premises": {
			"annual": "0.00",
			"monthly": "0.00",
			"weekly": "0.00"
			},
			"carparks": {
			"annual": "0.00",
			"monthly": "0.00",
			"weekly": "0.00"
			}
			},
			"paymentPeriod": "Monthly",
			"rentPaymentDay": "1st",
			"rentPaymentMonth": "January",
			"rentDay": "Sunday",
			"taxation": "Plus Tax",
			"initialState": {
			"agreement": {
			"agreementId": "8119",
			"agreementType": "Lease",
			"client": "Landlord",
			"currency": "NZD",
			"commercial": "Yes",
			"agreementMode": "Active",
			"commencementDate": "954504000000",
			"expiryDate": "1080648000000",
			"totalAnnualRent": "0.00",
			"rent": {
			"premises": {
			"annual": "0.00",
			"monthly": "0.00",
			"weekly": "0.00"
			},
			"carparks": {
			"annual": "0.00",
			"monthly": "0.00",
			"weekly": "0.00"
			}
			},
			"paymentPeriod": "Monthly",
			"rentPaymentDay": "1st",
			"rentPaymentMonth": "January",
			"rentDay": "Sunday",
			"taxation": "Plus Tax",
			"parties": {
			"Landlord": [
			  {
			"entityId": "7061",
			"entityName": "t e s t"
			}
			],
			"Tenant": [
			  {
			"entityId": "214",
			"entityName": "Jill Maloney Trust"
			}
			],
			"Guarantor": [
			  {
			"entityId": "215",
			"entityName": "Mr faslkdfm lfkmasdlkf lflafm"
			}
			],
			}
			}
			}
			},
			"relationships": {
			"properties": {
			"links": {
			"self": "/organisations/1/agreements/8119/relationships/properties/",
			"related": "/organisations/1/properties/"
			},
			"data": [
			  {
			"type": "properties",
			"id": "3048"
			}
			],
			},
			"events": {
			"links": {
			"self": "/organisations/1/agreements/8119/relationships/events/",
			"related": "/organisations/1/events/"
			},
			"data": [
			  {
			"type": "events",
			"id": "45567"
			},
			  {
			"type": "events",
			"id": "45568"
			},
			  {
			"type": "events",
			"id": "45569"
			},
			  {
			"type": "events",
			"id": "45570"
			},
			  {
			"type": "events",
			"id": "45571"
			},
			  {
			"type": "events",
			"id": "103218"
			}
			],
			},
			"organisations": {
			"links": {
			"self": "/organisations/1/agreements/8119/relationships/organisations/",
			"related": "/organisations/"
			},
			"data": [
			  {
			"type": "organisations",
			"id": "1"
			}
			],
			},
			"parties": {
			"Landlord": {
			"links": {
			"self": "/organisations/1/agreements/8119/relationships/parties/Landlord/",
			"related": "/organisations/1/entities/"
			},
			"data": [
			  {
			"type": "entities",
			"id": "7061"
			}
			],
			},
			"Tenant": {
			"links": {
			"self": "/organisations/1/agreements/8119/relationships/parties/Tenant/",
			"related": "/organisations/1/entities/"
			},
			"data": [
			  {
			"type": "entities",
			"id": "214"
			}
			],
			},
			"Guarantor": {
			"links": {
			"self": "/organisations/1/agreements/8119/relationships/parties/Guarantor/",
			"related": "/organisations/1/entities/"
			},
			"data": [
			  {
			"type": "entities",
			"id": "215"
			}
			],
			}
			},
			"notFollowing": {
			"users": {
			"links": {
			"self": "/organisations/1/agreements/8119/relationships/notFollowing/users/",
			"related": "/users/"
			},
			"data": [
			  {
			"type": "users",
			"id": "4"
			},
			  {
			"type": "users",
			"id": "6"
			},
			  {
			"type": "users",
			"id": "8"
			},
			  {
			"type": "users",
			"id": "58"
			},
			  {
			"type": "users",
			"id": "59"
			},
			  {
			"type": "users",
			"id": "60"
			},
			  {
			"type": "users",
			"id": "226"
			}
			],
			}
			}
			}
			},
			  {
			"type": "agreements",
			"id": 5475,
			"attributes": {
			"insertedDate": 1400457794000,
			"insertedBy": 226,
			"updatedDate": 1461105380000,
			"knownAs": "The hillst, 245 Montreal St, Christchurch",
			"internalReferences": [
			  "6858"
			],
			"jurisdiction": "New Zealand",
			"agreementType": "Lease",
			"client": "Landlord",
			"currency": "NZD",
			"commercial": "Yes",
			"agreementMode": "Active",
			"commencementDate": "1401537600000",
			"totalAnnualRent": "4647020.00",
			"rent": {
			"premises": {
			"annual": "564.00",
			"monthly": "47.00",
			"weekly": "10.85"
			},
			"carparks": {
			"annual": "4646456.00",
			"monthly": "387204.67",
			"weekly": "89354.92"
			}
			},
			"paymentPeriod": "Other",
			"rentPaymentDay": "1st",
			"rentPaymentMonth": "January",
			"rentDay": "Sunday",
			"taxation": "Plus Tax",
			"proportionOfOutgoings": "dgds",
			"additionalRent": "gdfwerwerfds dsfsfswef sefawe sthutuyk ufjty pl ktyju srw3w yeitldt",
			"defaultInterestRate": "gfd",
			"initialState": {
			"agreement": {
			"agreementId": "5475",
			"agreementType": "Lease",
			"client": "Landlord",
			"currency": "NZD",
			"commercial": "Yes",
			"agreementMode": "Active",
			"commencementDate": "1401537600000",
			"totalAnnualRent": "4647020.00",
			"rent": {
			"premises": {
			"annual": "564.00",
			"monthly": "47.00",
			"weekly": "10.85"
			},
			"carparks": {
			"annual": "4646456.00",
			"monthly": "387204.67",
			"weekly": "89354.92"
			}
			},
			"paymentPeriod": "Other",
			"rentPaymentDay": "1st",
			"rentPaymentMonth": "January",
			"rentDay": "Sunday",
			"taxation": "Plus Tax",
			"proportionOfOutgoings": "dgds",
			"additionalRent": "gdfwerwerfds dsfsfswef sefawe sthutuyk ufjty pl ktyju srw3w yeitldt",
			"defaultInterestRate": "gfd",
			"parties": {
			"Landlord": [
			  {
			"entityId": "213",
			"entityName": "Mr DAve Philip Bromley"
			}
			],
			"Tenant": [
			  {
			"entityId": "214",
			"entityName": "Jill Maloney Trust"
			}
			],
			"Guarantor": [
			  {
			"entityId": "213",
			"entityName": "Mr DAve Philip Bromley"
			}
			],
			}
			}
			}
			},
			"relationships": {
			"properties": {
			"links": {
			"self": "/organisations/1/agreements/5475/relationships/properties/",
			"related": "/organisations/1/properties/"
			},
			"data": [
			  {
			"type": "properties",
			"id": "4973"
			},
			  {
			"type": "properties",
			"id": "4972"
			},
			  {
			"type": "properties",
			"id": "155"
			}
			],
			},
			"notes": {
			"links": {
			"self": "/organisations/1/agreements/5475/relationships/notes/",
			"related": "/organisations/1/notes/"
			},
			"data": [
			  {
			"type": "notes",
			"id": 126
			}
			],
			},
			"events": {
			"links": {
			"self": "/organisations/1/agreements/5475/relationships/events/",
			"related": "/organisations/1/events/"
			},
			"data": [
			  {
			"type": "events",
			"id": "1782"
			},
			  {
			"type": "events",
			"id": "1783"
			},
			  {
			"type": "events",
			"id": "1784"
			}
			],
			},
			"organisations": {
			"links": {
			"self": "/organisations/1/agreements/5475/relationships/organisations/",
			"related": "/organisations/"
			},
			"data": [
			  {
			"type": "organisations",
			"id": "1"
			}
			],
			},
			"parties": {
			"Landlord": {
			"links": {
			"self": "/organisations/1/agreements/5475/relationships/parties/Landlord/",
			"related": "/organisations/1/entities/"
			},
			"data": [
			  {
			"type": "entities",
			"id": "213"
			}
			],
			},
			"Tenant": {
			"links": {
			"self": "/organisations/1/agreements/5475/relationships/parties/Tenant/",
			"related": "/organisations/1/entities/"
			},
			"data": [
			  {
			"type": "entities",
			"id": "214"
			}
			],
			},
			"Guarantor": {
			"links": {
			"self": "/organisations/1/agreements/5475/relationships/parties/Guarantor/",
			"related": "/organisations/1/entities/"
			},
			"data": [
			  {
			"type": "entities",
			"id": "213"
			}
			],
			}
			}
			}
			},
			  {
			"type": "agreements",
			"id": 5576,
			"attributes": {
			"insertedDate": 1403214690000,
			"insertedBy": 2,
			"updatedDate": 1461044425000,
			"knownAs": "This & That",
			"legalDescription": "This & That",
			"internalReferences": [
			  "This & That"
			],
			"jurisdiction": "New Zealand",
			"agreementType": "Lease",
			"client": "Landlord",
			"currency": "NZD",
			"commercial": "Yes",
			"agreementMode": "Active",
			"commencementDate": "1406808000000",
			"totalAnnualRent": "15120.00",
			"rent": {
			"premises": {
			"annual": "15000.00",
			"monthly": "1250.00",
			"weekly": "288.46"
			},
			"carparks": {
			"annual": "120.00",
			"monthly": "10.00",
			"weekly": "2.31"
			}
			},
			"paymentPeriod": "Monthly",
			"rentPaymentDay": "1st",
			"rentPaymentMonth": "January",
			"rentDay": "Sunday",
			"taxation": "Plus Tax",
			"proportionOfOutgoings": "This & That",
			"additionalRent": "This & That",
			"defaultInterestRate": "This & That",
			"fileNotes": "This & That",
			"businessUse": "This & That",
			"publicRiskInsuranceSum": "This & That",
			"hoursOfAccess": "This & That",
			"airConditioningDays": "This & That",
			"airConditioningHours": "This & That",
			"bankGuaranteeSum": "This & That",
			"initialState": {
			"agreement": {
			"agreementId": "5576",
			"agreementType": "Lease",
			"client": "Landlord",
			"currency": "NZD",
			"commercial": "Yes",
			"agreementMode": "Active",
			"commencementDate": "1406808000000",
			"totalAnnualRent": "15120.00",
			"rent": {
			"premises": {
			"annual": "15000.00",
			"monthly": "1250.00",
			"weekly": "288.46"
			},
			"carparks": {
			"annual": "120.00",
			"monthly": "10.00",
			"weekly": "2.31"
			}
			},
			"paymentPeriod": "Monthly",
			"rentPaymentDay": "1st",
			"rentPaymentMonth": "January",
			"rentDay": "Sunday",
			"taxation": "Plus Tax",
			"proportionOfOutgoings": "This & That",
			"additionalRent": "This & That",
			"defaultInterestRate": "This & That",
			"fileNotes": "This & That",
			"businessUse": "This & That",
			"publicRiskInsuranceSum": "This & That",
			"hoursOfAccess": "This & That",
			"airConditioningDays": "This & That",
			"airConditioningHours": "This & That",
			"bankGuaranteeSum": "This & That",
			"parties": {
			"Landlord": [
			  {
			"entityId": "517",
			"entityName": "Mr ASB"
			},
			  {
			"entityId": 435,
			"entityName": "Test ltd This &amp; That &lt;script&gt;alert('!');&lt;\/script&gt;"
			}
			],
			"Tenant": [
			  {
			"entityId": "751",
			"entityName": "fred corp"
			},
			  {
			"entityId": 754,
			"entityName": "Mr Explorer Ltd"
			}
			],
			}
			}
			}
			},
			"relationships": {
			"properties": {
			"links": {
			"self": "/organisations/1/agreements/5576/relationships/properties/",
			"related": "/organisations/1/properties/"
			},
			"data": [
			  {
			"type": "properties",
			"id": "4986"
			},
			  {
			"type": "properties",
			"id": "4985"
			},
			  {
			"type": "properties",
			"id": "1484"
			}
			],
			},
			"notes": {
			"links": {
			"self": "/organisations/1/agreements/5576/relationships/notes/",
			"related": "/organisations/1/notes/"
			},
			"data": [
			  {
			"type": "notes",
			"id": 109
			},
			  {
			"type": "notes",
			"id": 108
			},
			  {
			"type": "notes",
			"id": 107
			},
			  {
			"type": "notes",
			"id": 106
			},
			  {
			"type": "notes",
			"id": 105
			},
			  {
			"type": "notes",
			"id": 104
			},
			  {
			"type": "notes",
			"id": 86
			}
			],
			},
			"events": {
			"links": {
			"self": "/organisations/1/agreements/5576/relationships/events/",
			"related": "/organisations/1/events/"
			},
			"data": [
			  {
			"type": "events",
			"id": "6291"
			},
			  {
			"type": "events",
			"id": "6292"
			},
			  {
			"type": "events",
			"id": "6293"
			},
			  {
			"type": "events",
			"id": "28509"
			},
			  {
			"type": "events",
			"id": "42998"
			},
			  {
			"type": "events",
			"id": "42999"
			},
			  {
			"type": "events",
			"id": "43000"
			},
			  {
			"type": "events",
			"id": "43001"
			},
			  {
			"type": "events",
			"id": "43002"
			},
			  {
			"type": "events",
			"id": "43003"
			}
			],
			},
			"organisations": {
			"links": {
			"self": "/organisations/1/agreements/5576/relationships/organisations/",
			"related": "/organisations/"
			},
			"data": [
			  {
			"type": "organisations",
			"id": "1"
			}
			],
			},
			"parties": {
			"Landlord": {
			"links": {
			"self": "/organisations/1/agreements/5576/relationships/parties/Landlord/",
			"related": "/organisations/1/entities/"
			},
			"data": [
			  {
			"type": "entities",
			"id": "517"
			},
			  {
			"type": "entities",
			"id": 435
			}
			],
			},
			"Tenant": {
			"links": {
			"self": "/organisations/1/agreements/5576/relationships/parties/Tenant/",
			"related": "/organisations/1/entities/"
			},
			"data": [
			  {
			"type": "entities",
			"id": "751"
			},
			  {
			"type": "entities",
			"id": 754
			}
			],
			}
			}
			}
			},
			  {
			"type": "agreements",
			"id": 8110,
			"attributes": {
			"insertedDate": 1427150445000,
			"insertedBy": 2,
			"updatedDate": 1461044425000,
			"knownAs": "Tuesday app lease ",
			"legalDescription": "gdrg",
			"internalReferences": [],
			"jurisdiction": "New Zealand",
			"agreementType": "Lease",
			"client": "Landlord",
			"currency": "NZD",
			"commercial": "Yes",
			"agreementMode": "Active",
			"commencementDate": "954504000000",
			"expiryDate": "1143720000000",
			"totalAnnualRent": "0.00",
			"rent": {
			"premises": {
			"annual": "0.00",
			"monthly": "0.00",
			"weekly": "0.00"
			},
			"carparks": {
			"annual": "0.00",
			"monthly": "0.00",
			"weekly": "0.00"
			}
			},
			"initialState": {
			"agreement": {
			"agreementId": "8110",
			"agreementType": "Lease",
			"client": "Landlord",
			"currency": "NZD",
			"commercial": "Yes",
			"agreementMode": "Active",
			"commencementDate": "954504000000",
			"expiryDate": "1143720000000",
			"totalAnnualRent": "0.00",
			"rent": {
			"premises": {
			"annual": "0.00",
			"monthly": "0.00",
			"weekly": "0.00"
			},
			"carparks": {
			"annual": "0.00",
			"monthly": "0.00",
			"weekly": "0.00"
			}
			},
			"parties": {
			"Landlord": [
			  {
			"entityId": "6945",
			"entityName": "Captain Planet"
			}
			],
			"Tenant": [
			  {
			"entityId": "6949",
			"entityName": "Dr Death"
			}
			],
			"Guarantor": [
			  {
			"entityId": "6951",
			"entityName": "Trusting Trustees Trust"
			}
			],
			}
			}
			}
			},
			"relationships": {
			"properties": {
			"links": {
			"self": "/organisations/1/agreements/8110/relationships/properties/",
			"related": "/organisations/1/properties/"
			},
			"data": [
			  {
			"type": "properties",
			"id": "4992"
			},
			  {
			"type": "properties",
			"id": "1656"
			}
			],
			},
			"notes": {
			"links": {
			"self": "/organisations/1/agreements/8110/relationships/notes/",
			"related": "/organisations/1/notes/"
			},
			"data": [
			  {
			"type": "notes",
			"id": 125
			}
			],
			},
			"events": {
			"links": {
			"self": "/organisations/1/agreements/8110/relationships/events/",
			"related": "/organisations/1/events/"
			},
			"data": [
			  {
			"type": "events",
			"id": "45016"
			},
			  {
			"type": "events",
			"id": "45017"
			},
			  {
			"type": "events",
			"id": "45018"
			},
			  {
			"type": "events",
			"id": "45019"
			},
			  {
			"type": "events",
			"id": "45020"
			},
			  {
			"type": "events",
			"id": "45021"
			},
			  {
			"type": "events",
			"id": "45022"
			}
			],
			},
			"organisations": {
			"links": {
			"self": "/organisations/1/agreements/8110/relationships/organisations/",
			"related": "/organisations/"
			},
			"data": [
			  {
			"type": "organisations",
			"id": "1"
			}
			],
			},
			"parties": {
			"Landlord": {
			"links": {
			"self": "/organisations/1/agreements/8110/relationships/parties/Landlord/",
			"related": "/organisations/1/entities/"
			},
			"data": [
			  {
			"type": "entities",
			"id": "6945"
			}
			],
			},
			"Tenant": {
			"links": {
			"self": "/organisations/1/agreements/8110/relationships/parties/Tenant/",
			"related": "/organisations/1/entities/"
			},
			"data": [
			  {
			"type": "entities",
			"id": "6949"
			}
			],
			},
			"Guarantor": {
			"links": {
			"self": "/organisations/1/agreements/8110/relationships/parties/Guarantor/",
			"related": "/organisations/1/entities/"
			},
			"data": [
			  {
			"type": "entities",
			"id": "6951"
			}
			],
			}
			},
			"notFollowing": {
			"users": {
			"links": {
			"self": "/organisations/1/agreements/8110/relationships/notFollowing/users/",
			"related": "/users/"
			},
			"data": [
			  {
			"type": "users",
			"id": "2"
			},
			  {
			"type": "users",
			"id": "4"
			},
			  {
			"type": "users",
			"id": "6"
			},
			  {
			"type": "users",
			"id": "8"
			},
			  {
			"type": "users",
			"id": "58"
			},
			  {
			"type": "users",
			"id": "59"
			},
			  {
			"type": "users",
			"id": "60"
			}
			],
			}
			}
			}
			},
			  {
			"type": "agreements",
			"id": 5499,
			"attributes": {
			"insertedDate": 1401145115000,
			"insertedBy": 2,
			"updatedDate": 1461105380000,
			"knownAs": "Undefined Property",
			"internalReferences": [],
			"jurisdiction": "New Zealand",
			"agreementType": "Lease",
			"client": "Landlord",
			"currency": "NZD",
			"commercial": "Yes",
			"agreementMode": "Active",
			"commencementDate": "1401537600000",
			"expiryDate": "1440936000000",
			"totalAnnualRent": "0.00",
			"rent": {
			"premises": {
			"annual": "0.00",
			"monthly": "0.00",
			"weekly": "0.00"
			},
			"carparks": {
			"annual": "0.00",
			"monthly": "0.00",
			"weekly": "0.00"
			}
			},
			"initialState": {
			"agreement": {
			"agreementId": "5499",
			"agreementType": "Lease",
			"client": "Landlord",
			"currency": "NZD",
			"commercial": "Yes",
			"agreementMode": "Active",
			"commencementDate": "1401537600000",
			"expiryDate": "1440936000000",
			"totalAnnualRent": "0.00",
			"rent": {
			"premises": {
			"annual": "0.00",
			"monthly": "0.00",
			"weekly": "0.00"
			},
			"carparks": {
			"annual": "0.00",
			"monthly": "0.00",
			"weekly": "0.00"
			}
			},
			"parties": {}
			}
			}
			},
			"relationships": {
			"events": {
			"links": {
			"self": "/organisations/1/agreements/5499/relationships/events/",
			"related": "/organisations/1/events/"
			},
			"data": [
			  {
			"type": "events",
			"id": "1972"
			},
			  {
			"type": "events",
			"id": "5492"
			},
			  {
			"type": "events",
			"id": "5494"
			},
			  {
			"type": "events",
			"id": "5495"
			},
			  {
			"type": "events",
			"id": "5496"
			},
			  {
			"type": "events",
			"id": "5497"
			},
			  {
			"type": "events",
			"id": "5498"
			},
			  {
			"type": "events",
			"id": "5499"
			},
			  {
			"type": "events",
			"id": "5500"
			},
			  {
			"type": "events",
			"id": "5501"
			},
			  {
			"type": "events",
			"id": "5502"
			},
			  {
			"type": "events",
			"id": "5503"
			},
			  {
			"type": "events",
			"id": "5504"
			},
			  {
			"type": "events",
			"id": "5505"
			},
			  {
			"type": "events",
			"id": "5506"
			},
			  {
			"type": "events",
			"id": "5507"
			},
			  {
			"type": "events",
			"id": "5508"
			},
			  {
			"type": "events",
			"id": "5509"
			},
			  {
			"type": "events",
			"id": "5510"
			},
			  {
			"type": "events",
			"id": "5511"
			},
			  {
			"type": "events",
			"id": "5512"
			},
			  {
			"type": "events",
			"id": "5513"
			},
			  {
			"type": "events",
			"id": "5514"
			},
			  {
			"type": "events",
			"id": "5515"
			},
			  {
			"type": "events",
			"id": "5516"
			},
			  {
			"type": "events",
			"id": "5517"
			},
			  {
			"type": "events",
			"id": "5518"
			},
			  {
			"type": "events",
			"id": "5519"
			}
			],
			},
			"organisations": {
			"links": {
			"self": "/organisations/1/agreements/5499/relationships/organisations/",
			"related": "/organisations/"
			},
			"data": [
			  {
			"type": "organisations",
			"id": "1"
			}
			],
			}
			}
			},
			  {
			"type": "agreements",
			"id": 179359,
			"attributes": {
			"insertedDate": 1462834459000,
			"insertedBy": 2,
			"updatedDate": 1468985833000,
			"knownAs": "Undefined Property",
			"internalReferences": [],
			"jurisdiction": "New Zealand",
			"agreementType": "Lease",
			"client": "Landlord",
			"currency": "NZD",
			"commercial": "Yes",
			"agreementMode": "Inactive",
			"totalAnnualRent": "0.00",
			"rent": {
			"premises": {
			"annual": "0.00",
			"monthly": "0.00",
			"weekly": "0.00"
			},
			"carparks": {
			"annual": "0.00",
			"monthly": "0.00",
			"weekly": "0.00"
			}
			},
			"initialState": {
			"agreement": {
			"agreementId": "179359",
			"agreementType": "Lease",
			"client": "Landlord",
			"currency": "NZD",
			"commercial": "Yes",
			"agreementMode": "Inactive",
			"totalAnnualRent": "0.00",
			"rent": {
			"premises": {
			"annual": "0.00",
			"monthly": "0.00",
			"weekly": "0.00"
			},
			"carparks": {
			"annual": "0.00",
			"monthly": "0.00",
			"weekly": "0.00"
			}
			},
			"parties": {}
			}
			}
			},
			"relationships": {
			"organisations": {
			"links": {
			"self": "/organisations/1/agreements/179359/relationships/organisations/",
			"related": "/organisations/"
			},
			"data": [
			  {
			"type": "organisations",
			"id": "1"
			}
			],
			}
			}
			},
			  {
			"type": "agreements",
			"id": 9190,
			"attributes": {
			"insertedDate": 1437692391000,
			"insertedBy": 2,
			"updatedDate": 1461105380000,
			"knownAs": "Undefined Property",
			"internalReferences": [],
			"jurisdiction": "New Zealand",
			"agreementType": "Lease",
			"client": "Landlord",
			"currency": "NZD",
			"commercial": "Yes",
			"agreementMode": "Inactive",
			"totalAnnualRent": "0.00",
			"rent": {
			"premises": {
			"annual": "0.00",
			"monthly": "0.00",
			"weekly": "0.00"
			},
			"carparks": {
			"annual": "0.00",
			"monthly": "0.00",
			"weekly": "0.00"
			}
			},
			"initialState": {
			"agreement": {
			"agreementId": "9190",
			"agreementType": "Lease",
			"client": "Landlord",
			"currency": "NZD",
			"commercial": "Yes",
			"agreementMode": "Inactive",
			"totalAnnualRent": "0.00",
			"rent": {
			"premises": {
			"annual": "0.00",
			"monthly": "0.00",
			"weekly": "0.00"
			},
			"carparks": {
			"annual": "0.00",
			"monthly": "0.00",
			"weekly": "0.00"
			}
			},
			"parties": {}
			}
			}
			},
			"relationships": {
			"organisations": {
			"links": {
			"self": "/organisations/1/agreements/9190/relationships/organisations/",
			"related": "/organisations/"
			},
			"data": [
			  {
			"type": "organisations",
			"id": "1"
			}
			],
			}
			}
			},
			  {
			"type": "agreements",
			"id": 8821,
			"attributes": {
			"insertedDate": 1434487302000,
			"insertedBy": 2,
			"updatedDate": 1461105380000,
			"knownAs": "Undefined Property",
			"internalReferences": [],
			"jurisdiction": "New Zealand",
			"agreementType": "Lease",
			"client": "Landlord",
			"currency": "NZD",
			"commercial": "Yes",
			"agreementMode": "Inactive",
			"totalAnnualRent": "0.00",
			"rent": {
			"premises": {
			"annual": "0.00",
			"monthly": "0.00",
			"weekly": "0.00"
			},
			"carparks": {
			"annual": "0.00",
			"monthly": "0.00",
			"weekly": "0.00"
			}
			},
			"initialState": {
			"agreement": {
			"agreementId": "8821",
			"agreementType": "Lease",
			"client": "Landlord",
			"currency": "NZD",
			"commercial": "Yes",
			"agreementMode": "Inactive",
			"totalAnnualRent": "0.00",
			"rent": {
			"premises": {
			"annual": "0.00",
			"monthly": "0.00",
			"weekly": "0.00"
			},
			"carparks": {
			"annual": "0.00",
			"monthly": "0.00",
			"weekly": "0.00"
			}
			},
			"parties": {}
			}
			}
			},
			"relationships": {
			"organisations": {
			"links": {
			"self": "/organisations/1/agreements/8821/relationships/organisations/",
			"related": "/organisations/"
			},
			"data": [
			  {
			"type": "organisations",
			"id": "1"
			}
			],
			}
			}
			},
			  {
			"type": "agreements",
			"id": 8778,
			"attributes": {
			"insertedDate": 1433988147000,
			"insertedBy": 2,
			"updatedDate": 1461105380000,
			"knownAs": "Undefined Property",
			"internalReferences": [],
			"jurisdiction": "New Zealand",
			"agreementType": "Lease",
			"client": "Landlord",
			"currency": "NZD",
			"commercial": "Yes",
			"agreementMode": "Inactive",
			"commencementDate": "1435665600000",
			"totalAnnualRent": "0.00",
			"rent": {
			"premises": {
			"annual": "0.00",
			"monthly": "0.00",
			"weekly": "0.00"
			},
			"carparks": {
			"annual": "0.00",
			"monthly": "0.00",
			"weekly": "0.00"
			}
			},
			"paymentPeriod": "Monthly",
			"rentPaymentDay": "1st",
			"rentPaymentMonth": "January",
			"rentDay": "Sunday",
			"taxation": "Plus Tax",
			"initialState": {
			"agreement": {
			"agreementId": "8778",
			"agreementType": "Lease",
			"client": "Landlord",
			"currency": "NZD",
			"commercial": "Yes",
			"agreementMode": "Inactive",
			"commencementDate": "1435665600000",
			"totalAnnualRent": "0.00",
			"rent": {
			"premises": {
			"annual": "0.00",
			"monthly": "0.00",
			"weekly": "0.00"
			},
			"carparks": {
			"annual": "0.00",
			"monthly": "0.00",
			"weekly": "0.00"
			}
			},
			"paymentPeriod": "Monthly",
			"rentPaymentDay": "1st",
			"rentPaymentMonth": "January",
			"rentDay": "Sunday",
			"taxation": "Plus Tax",
			"parties": {}
			}
			}
			},
			"relationships": {
			"events": {
			"links": {
			"self": "/organisations/1/agreements/8778/relationships/events/",
			"related": "/organisations/1/events/"
			},
			"data": [
			  {
			"type": "events",
			"id": "60986"
			}
			],
			},
			"organisations": {
			"links": {
			"self": "/organisations/1/agreements/8778/relationships/organisations/",
			"related": "/organisations/"
			},
			"data": [
			  {
			"type": "organisations",
			"id": "1"
			}
			],
			}
			}
			},
			  {
			"type": "agreements",
			"id": 34797,
			"attributes": {
			"insertedDate": 1444949171000,
			"insertedBy": 2,
			"updatedDate": 1461105380000,
			"knownAs": "Undefined Property",
			"internalReferences": [],
			"jurisdiction": "New Zealand",
			"agreementType": "Sublease",
			"client": "HeadLessor",
			"currency": "NZD",
			"commercial": "Yes",
			"agreementMode": "Inactive",
			"totalAnnualRent": "0.00",
			"rent": {
			"premises": {
			"annual": "0.00",
			"monthly": "0.00",
			"weekly": "0.00"
			},
			"carparks": {
			"annual": "0.00",
			"monthly": "0.00",
			"weekly": "0.00"
			}
			},
			"initialState": {
			"agreement": {
			"agreementId": "34797",
			"agreementType": "Sublease",
			"client": "HeadLessor",
			"currency": "NZD",
			"commercial": "Yes",
			"agreementMode": "Inactive",
			"totalAnnualRent": "0.00",
			"rent": {
			"premises": {
			"annual": "0.00",
			"monthly": "0.00",
			"weekly": "0.00"
			},
			"carparks": {
			"annual": "0.00",
			"monthly": "0.00",
			"weekly": "0.00"
			}
			},
			"parties": {}
			}
			}
			},
			"relationships": {
			"organisations": {
			"links": {
			"self": "/organisations/1/agreements/34797/relationships/organisations/",
			"related": "/organisations/"
			},
			"data": [
			  {
			"type": "organisations",
			"id": "1"
			}
			],
			}
			}
			},
			  {
			"type": "agreements",
			"id": 24793,
			"attributes": {
			"insertedDate": 1442177653000,
			"insertedBy": 2,
			"updatedDate": 1461105380000,
			"knownAs": "Undefined Property",
			"internalReferences": [
			  "sdfsd"
			],
			"jurisdiction": "New Zealand",
			"agreementType": "License",
			"client": "Licensor",
			"currency": "NZD",
			"commercial": "Yes",
			"agreementMode": "Inactive",
			"totalAnnualRent": "0.00",
			"rent": {
			"premises": {
			"annual": "0.00",
			"monthly": "0.00",
			"weekly": "0.00"
			},
			"carparks": {
			"annual": "0.00",
			"monthly": "0.00",
			"weekly": "0.00"
			}
			},
			"initialState": {
			"agreement": {
			"agreementId": "24793",
			"agreementType": "License",
			"client": "Licensor",
			"currency": "NZD",
			"commercial": "Yes",
			"agreementMode": "Inactive",
			"totalAnnualRent": "0.00",
			"rent": {
			"premises": {
			"annual": "0.00",
			"monthly": "0.00",
			"weekly": "0.00"
			},
			"carparks": {
			"annual": "0.00",
			"monthly": "0.00",
			"weekly": "0.00"
			}
			},
			"parties": {}
			}
			}
			},
			"relationships": {
			"organisations": {
			"links": {
			"self": "/organisations/1/agreements/24793/relationships/organisations/",
			"related": "/organisations/"
			},
			"data": [
			  {
			"type": "organisations",
			"id": "1"
			}
			],
			}
			}
			},
			  {
			"type": "agreements",
			"id": 29956,
			"attributes": {
			"insertedDate": 1443565367000,
			"insertedBy": 2,
			"updatedDate": 1461105380000,
			"knownAs": "Undefined Property",
			"internalReferences": [],
			"jurisdiction": "New Zealand",
			"easementType": "Right of Way:Right to Use Water",
			"agreementType": "Easement",
			"client": "Dominant Tenement",
			"currency": "NZD",
			"commercial": "Yes",
			"agreementMode": "Inactive",
			"totalAnnualRent": "0.00",
			"rent": {
			"premises": {
			"annual": "0.00",
			"monthly": "0.00",
			"weekly": "0.00"
			},
			"carparks": {
			"annual": "0.00",
			"monthly": "0.00",
			"weekly": "0.00"
			}
			},
			"initialState": {
			"agreement": {
			"agreementId": "29956",
			"agreementType": "Easement",
			"client": "Dominant Tenement",
			"currency": "NZD",
			"commercial": "Yes",
			"agreementMode": "Inactive",
			"totalAnnualRent": "0.00",
			"rent": {
			"premises": {
			"annual": "0.00",
			"monthly": "0.00",
			"weekly": "0.00"
			},
			"carparks": {
			"annual": "0.00",
			"monthly": "0.00",
			"weekly": "0.00"
			}
			},
			"parties": {}
			}
			}
			},
			"relationships": {
			"organisations": {
			"links": {
			"self": "/organisations/1/agreements/29956/relationships/organisations/",
			"related": "/organisations/"
			},
			"data": [
			  {
			"type": "organisations",
			"id": "1"
			}
			],
			}
			}
			},
			  {
			"type": "agreements",
			"id": 147191,
			"attributes": {
			"insertedDate": 1457644804000,
			"insertedBy": 2,
			"updatedDate": 1461105380000,
			"knownAs": "Undefined Property",
			"internalReferences": [],
			"jurisdiction": "New Zealand",
			"agreementType": "Lease",
			"client": "Landlord",
			"currency": "NZD",
			"commercial": "Yes",
			"agreementMode": "Inactive",
			"totalAnnualRent": "0.00",
			"rent": {
			"premises": {
			"annual": "0.00",
			"monthly": "0.00",
			"weekly": "0.00"
			},
			"carparks": {
			"annual": "0.00",
			"monthly": "0.00",
			"weekly": "0.00"
			}
			},
			"initialState": {
			"agreement": {
			"agreementId": "147191",
			"agreementType": "Lease",
			"client": "Landlord",
			"currency": "NZD",
			"commercial": "Yes",
			"agreementMode": "Inactive",
			"totalAnnualRent": "0.00",
			"rent": {
			"premises": {
			"annual": "0.00",
			"monthly": "0.00",
			"weekly": "0.00"
			},
			"carparks": {
			"annual": "0.00",
			"monthly": "0.00",
			"weekly": "0.00"
			}
			},
			"parties": {}
			}
			}
			},
			"relationships": {
			"organisations": {
			"links": {
			"self": "/organisations/1/agreements/147191/relationships/organisations/",
			"related": "/organisations/"
			},
			"data": [
			  {
			"type": "organisations",
			"id": "1"
			}
			],
			}
			}
			},
			  {
			"type": "agreements",
			"id": 115755,
			"attributes": {
			"insertedDate": 1455658633000,
			"insertedBy": 2,
			"updatedDate": 1461105380000,
			"knownAs": "Undefined Property",
			"internalReferences": [],
			"jurisdiction": "New Zealand",
			"agreementType": "Lease",
			"client": "Landlord",
			"currency": "NZD",
			"commercial": "Yes",
			"agreementMode": "Inactive",
			"totalAnnualRent": "0.00",
			"rent": {
			"premises": {
			"annual": "0.00",
			"monthly": "0.00",
			"weekly": "0.00"
			},
			"carparks": {
			"annual": "0.00",
			"monthly": "0.00",
			"weekly": "0.00"
			}
			},
			"initialState": {
			"agreement": {
			"agreementId": "115755",
			"agreementType": "Lease",
			"client": "Landlord",
			"currency": "NZD",
			"commercial": "Yes",
			"agreementMode": "Inactive",
			"totalAnnualRent": "0.00",
			"rent": {
			"premises": {
			"annual": "0.00",
			"monthly": "0.00",
			"weekly": "0.00"
			},
			"carparks": {
			"annual": "0.00",
			"monthly": "0.00",
			"weekly": "0.00"
			}
			},
			"parties": {}
			}
			}
			},
			"relationships": {
			"organisations": {
			"links": {
			"self": "/organisations/1/agreements/115755/relationships/organisations/",
			"related": "/organisations/"
			},
			"data": [
			  {
			"type": "organisations",
			"id": "1"
			}
			],
			}
			}
			},
			  {
			"type": "agreements",
			"id": 148111,
			"attributes": {
			"insertedDate": 1457646878000,
			"insertedBy": 2,
			"updatedDate": 1461105380000,
			"knownAs": "Undefined Property",
			"internalReferences": [],
			"jurisdiction": "New Zealand",
			"agreementType": "Lease",
			"client": "Landlord",
			"currency": "NZD",
			"commercial": "Yes",
			"agreementMode": "Inactive",
			"totalAnnualRent": "0.00",
			"rent": {
			"premises": {
			"annual": "0.00",
			"monthly": "0.00",
			"weekly": "0.00"
			},
			"carparks": {
			"annual": "0.00",
			"monthly": "0.00",
			"weekly": "0.00"
			}
			},
			"initialState": {
			"agreement": {
			"agreementId": "148111",
			"agreementType": "Lease",
			"client": "Landlord",
			"currency": "NZD",
			"commercial": "Yes",
			"agreementMode": "Inactive",
			"totalAnnualRent": "0.00",
			"rent": {
			"premises": {
			"annual": "0.00",
			"monthly": "0.00",
			"weekly": "0.00"
			},
			"carparks": {
			"annual": "0.00",
			"monthly": "0.00",
			"weekly": "0.00"
			}
			},
			"parties": {}
			}
			}
			},
			"relationships": {
			"organisations": {
			"links": {
			"self": "/organisations/1/agreements/148111/relationships/organisations/",
			"related": "/organisations/"
			},
			"data": [
			  {
			"type": "organisations",
			"id": "1"
			}
			],
			}
			}
			},
			  {
			"type": "agreements",
			"id": 8209,
			"attributes": {
			"insertedDate": 1430170860000,
			"insertedBy": 2,
			"updatedDate": 1461105380000,
			"knownAs": "Undefined Property",
			"internalReferences": [],
			"jurisdiction": "New Zealand",
			"agreementType": "Lease",
			"client": "Landlord",
			"currency": "NZD",
			"commercial": "Yes",
			"agreementMode": "Inactive",
			"totalAnnualRent": "0.00",
			"rent": {
			"premises": {
			"annual": "0.00",
			"monthly": "0.00",
			"weekly": "0.00"
			},
			"carparks": {
			"annual": "0.00",
			"monthly": "0.00",
			"weekly": "0.00"
			}
			},
			"initialState": {
			"agreement": {
			"agreementId": "8209",
			"agreementType": "Lease",
			"client": "Landlord",
			"currency": "NZD",
			"commercial": "Yes",
			"agreementMode": "Inactive",
			"totalAnnualRent": "0.00",
			"rent": {
			"premises": {
			"annual": "0.00",
			"monthly": "0.00",
			"weekly": "0.00"
			},
			"carparks": {
			"annual": "0.00",
			"monthly": "0.00",
			"weekly": "0.00"
			}
			},
			"parties": {}
			}
			}
			},
			"relationships": {
			"organisations": {
			"links": {
			"self": "/organisations/1/agreements/8209/relationships/organisations/",
			"related": "/organisations/"
			},
			"data": [
			  {
			"type": "organisations",
			"id": "1"
			}
			],
			}
			}
			},
			  {
			"type": "agreements",
			"id": 8174,
			"attributes": {
			"insertedDate": 1429567380000,
			"insertedBy": 2,
			"updatedDate": 1461105380000,
			"knownAs": "Undefined Property",
			"internalReferences": [],
			"jurisdiction": "New Zealand",
			"agreementType": "Lease",
			"client": "Landlord",
			"currency": "NZD",
			"commercial": "Yes",
			"agreementMode": "Inactive",
			"totalAnnualRent": "0.00",
			"rent": {
			"premises": {
			"annual": "0.00",
			"monthly": "0.00",
			"weekly": "0.00"
			},
			"carparks": {
			"annual": "0.00",
			"monthly": "0.00",
			"weekly": "0.00"
			}
			},
			"initialState": {
			"agreement": {
			"agreementId": "8174",
			"agreementType": "Lease",
			"client": "Landlord",
			"currency": "NZD",
			"commercial": "Yes",
			"agreementMode": "Inactive",
			"totalAnnualRent": "0.00",
			"rent": {
			"premises": {
			"annual": "0.00",
			"monthly": "0.00",
			"weekly": "0.00"
			},
			"carparks": {
			"annual": "0.00",
			"monthly": "0.00",
			"weekly": "0.00"
			}
			},
			"parties": {
			"Tenant": [
			  {
			"entityId": "7114",
			"entityName": "A new company"
			}
			],
			"Landlord": [
			  {
			"entityId": "7115",
			"entityName": "A new trust"
			}
			],
			}
			}
			}
			},
			"relationships": {
			"organisations": {
			"links": {
			"self": "/organisations/1/agreements/8174/relationships/organisations/",
			"related": "/organisations/"
			},
			"data": [
			  {
			"type": "organisations",
			"id": "1"
			}
			],
			},
			"parties": {
			"Tenant": {
			"links": {
			"self": "/organisations/1/agreements/8174/relationships/parties/Tenant/",
			"related": "/organisations/1/entities/"
			},
			"data": [
			  {
			"type": "entities",
			"id": "7114"
			}
			],
			},
			"Landlord": {
			"links": {
			"self": "/organisations/1/agreements/8174/relationships/parties/Landlord/",
			"related": "/organisations/1/entities/"
			},
			"data": [
			  {
			"type": "entities",
			"id": "7115"
			}
			],
			}
			}
			}
			},
			  {
			"type": "agreements",
			"id": 8126,
			"attributes": {
			"insertedDate": 1427337154000,
			"insertedBy": 2,
			"updatedDate": 1461105380000,
			"knownAs": "Undefined Property",
			"internalReferences": [],
			"jurisdiction": "New Zealand",
			"agreementType": "Lease",
			"client": "Landlord",
			"currency": "NZD",
			"commercial": "Yes",
			"agreementMode": "Inactive",
			"totalAnnualRent": "0.00",
			"rent": {
			"premises": {
			"annual": "0.00",
			"monthly": "0.00",
			"weekly": "0.00"
			},
			"carparks": {
			"annual": "0.00",
			"monthly": "0.00",
			"weekly": "0.00"
			}
			},
			"initialState": {
			"agreement": {
			"agreementId": "8126",
			"agreementType": "Lease",
			"client": "Landlord",
			"currency": "NZD",
			"commercial": "Yes",
			"agreementMode": "Inactive",
			"totalAnnualRent": "0.00",
			"rent": {
			"premises": {
			"annual": "0.00",
			"monthly": "0.00",
			"weekly": "0.00"
			},
			"carparks": {
			"annual": "0.00",
			"monthly": "0.00",
			"weekly": "0.00"
			}
			},
			"parties": {}
			}
			}
			},
			"relationships": {
			"organisations": {
			"links": {
			"self": "/organisations/1/agreements/8126/relationships/organisations/",
			"related": "/organisations/"
			},
			"data": [
			  {
			"type": "organisations",
			"id": "1"
			}
			],
			}
			}
			},
			  {
			"type": "agreements",
			"id": 7801,
			"attributes": {
			"insertedDate": 1421032535000,
			"insertedBy": 6,
			"updatedDate": 1461105380000,
			"knownAs": "Undefined Property",
			"internalReferences": [],
			"jurisdiction": "New Zealand",
			"agreementType": "Lease",
			"client": "Landlord",
			"currency": "NZD",
			"commercial": "Yes",
			"agreementMode": "Inactive",
			"totalAnnualRent": "0.00",
			"rent": {
			"premises": {
			"annual": "0.00",
			"monthly": "0.00",
			"weekly": "0.00"
			},
			"carparks": {
			"annual": "0.00",
			"monthly": "0.00",
			"weekly": "0.00"
			}
			},
			"initialState": {
			"agreement": {
			"agreementId": "7801",
			"agreementType": "Lease",
			"client": "Landlord",
			"currency": "NZD",
			"commercial": "Yes",
			"agreementMode": "Inactive",
			"totalAnnualRent": "0.00",
			"rent": {
			"premises": {
			"annual": "0.00",
			"monthly": "0.00",
			"weekly": "0.00"
			},
			"carparks": {
			"annual": "0.00",
			"monthly": "0.00",
			"weekly": "0.00"
			}
			},
			"parties": {}
			}
			}
			},
			"relationships": {
			"organisations": {
			"links": {
			"self": "/organisations/1/agreements/7801/relationships/organisations/",
			"related": "/organisations/"
			},
			"data": [
			  {
			"type": "organisations",
			"id": "1"
			}
			],
			}
			}
			},
			  {
			"type": "agreements",
			"id": 7800,
			"attributes": {
			"insertedDate": 1421032157000,
			"insertedBy": 6,
			"updatedDate": 1461105380000,
			"knownAs": "Undefined Property",
			"internalReferences": [],
			"jurisdiction": "New Zealand",
			"agreementType": "Lease",
			"client": "Landlord",
			"currency": "NZD",
			"commercial": "Yes",
			"agreementMode": "Inactive",
			"totalAnnualRent": "0.00",
			"rent": {
			"premises": {
			"annual": "0.00",
			"monthly": "0.00",
			"weekly": "0.00"
			},
			"carparks": {
			"annual": "0.00",
			"monthly": "0.00",
			"weekly": "0.00"
			}
			},
			"initialState": {
			"agreement": {
			"agreementId": "7800",
			"agreementType": "Lease",
			"client": "Landlord",
			"currency": "NZD",
			"commercial": "Yes",
			"agreementMode": "Inactive",
			"totalAnnualRent": "0.00",
			"rent": {
			"premises": {
			"annual": "0.00",
			"monthly": "0.00",
			"weekly": "0.00"
			},
			"carparks": {
			"annual": "0.00",
			"monthly": "0.00",
			"weekly": "0.00"
			}
			},
			"parties": {}
			}
			}
			},
			"relationships": {
			"organisations": {
			"links": {
			"self": "/organisations/1/agreements/7800/relationships/organisations/",
			"related": "/organisations/"
			},
			"data": [
			  {
			"type": "organisations",
			"id": "1"
			}
			],
			}
			}
			},
			  {
			"type": "agreements",
			"id": 8032,
			"attributes": {
			"insertedDate": 1425413997000,
			"insertedBy": 2,
			"updatedDate": 1461105380000,
			"knownAs": "Undefined Property",
			"internalReferences": [],
			"jurisdiction": "New Zealand",
			"agreementType": "Lease",
			"client": "Landlord",
			"currency": "NZD",
			"commercial": "Yes",
			"agreementMode": "Inactive",
			"commencementDate": "891345600000",
			"expiryDate": "1017489600000",
			"totalAnnualRent": "0.00",
			"rent": {
			"premises": {
			"annual": "0.00",
			"monthly": "0.00",
			"weekly": "0.00"
			},
			"carparks": {
			"annual": "0.00",
			"monthly": "0.00",
			"weekly": "0.00"
			}
			},
			"initialState": {
			"agreement": {
			"agreementId": "8032",
			"agreementType": "Lease",
			"client": "Landlord",
			"currency": "NZD",
			"commercial": "Yes",
			"agreementMode": "Inactive",
			"commencementDate": "891345600000",
			"expiryDate": "1017489600000",
			"totalAnnualRent": "0.00",
			"rent": {
			"premises": {
			"annual": "0.00",
			"monthly": "0.00",
			"weekly": "0.00"
			},
			"carparks": {
			"annual": "0.00",
			"monthly": "0.00",
			"weekly": "0.00"
			}
			},
			"parties": {}
			}
			}
			},
			"relationships": {
			"events": {
			"links": {
			"self": "/organisations/1/agreements/8032/relationships/events/",
			"related": "/organisations/1/events/"
			},
			"data": [
			  {
			"type": "events",
			"id": "40538"
			},
			  {
			"type": "events",
			"id": "40540"
			},
			  {
			"type": "events",
			"id": "40562"
			},
			  {
			"type": "events",
			"id": "40577"
			},
			  {
			"type": "events",
			"id": "40579"
			}
			],
			},
			"organisations": {
			"links": {
			"self": "/organisations/1/agreements/8032/relationships/organisations/",
			"related": "/organisations/"
			},
			"data": [
			  {
			"type": "organisations",
			"id": "1"
			}
			],
			}
			}
			},
			  {
			"type": "agreements",
			"id": 8030,
			"attributes": {
			"insertedDate": 1425376194000,
			"insertedBy": 2,
			"updatedDate": 1461105380000,
			"knownAs": "Undefined Property",
			"internalReferences": [],
			"jurisdiction": "New Zealand",
			"agreementType": "Lease",
			"client": "Landlord",
			"currency": "NZD",
			"commercial": "Yes",
			"agreementMode": "Inactive",
			"commencementDate": "1427803200000",
			"expiryDate": "1553947200000",
			"totalAnnualRent": "0.00",
			"rent": {
			"premises": {
			"annual": "0.00",
			"monthly": "0.00",
			"weekly": "0.00"
			},
			"carparks": {
			"annual": "0.00",
			"monthly": "0.00",
			"weekly": "0.00"
			}
			},
			"paymentPeriod": "Monthly",
			"rentPaymentDay": "1st",
			"rentPaymentMonth": "January",
			"rentDay": "Sunday",
			"taxation": "Plus Tax",
			"initialState": {
			"agreement": {
			"agreementId": "8030",
			"agreementType": "Lease",
			"client": "Landlord",
			"currency": "NZD",
			"commercial": "Yes",
			"agreementMode": "Inactive",
			"commencementDate": "1427803200000",
			"expiryDate": "1553947200000",
			"totalAnnualRent": "0.00",
			"rent": {
			"premises": {
			"annual": "0.00",
			"monthly": "0.00",
			"weekly": "0.00"
			},
			"carparks": {
			"annual": "0.00",
			"monthly": "0.00",
			"weekly": "0.00"
			}
			},
			"paymentPeriod": "Monthly",
			"rentPaymentDay": "1st",
			"rentPaymentMonth": "January",
			"rentDay": "Sunday",
			"taxation": "Plus Tax",
			"parties": {
			"Landlord": [
			  {
			"entityId": "517",
			"entityName": "Mr ASB"
			}
			],
			}
			}
			}
			},
			"relationships": {
			"events": {
			"links": {
			"self": "/organisations/1/agreements/8030/relationships/events/",
			"related": "/organisations/1/events/"
			},
			"data": [
			  {
			"type": "events",
			"id": "40526"
			},
			  {
			"type": "events",
			"id": "40527"
			},
			  {
			"type": "events",
			"id": "40534"
			},
			  {
			"type": "events",
			"id": "40536"
			}
			],
			},
			"organisations": {
			"links": {
			"self": "/organisations/1/agreements/8030/relationships/organisations/",
			"related": "/organisations/"
			},
			"data": [
			  {
			"type": "organisations",
			"id": "1"
			}
			],
			},
			"parties": {
			"Landlord": {
			"links": {
			"self": "/organisations/1/agreements/8030/relationships/parties/Landlord/",
			"related": "/organisations/1/entities/"
			},
			"data": [
			  {
			"type": "entities",
			"id": "517"
			}
			],
			}
			}
			}
			},
			  {
			"type": "agreements",
			"id": 7751,
			"attributes": {
			"insertedDate": 1418881957000,
			"insertedBy": 2,
			"updatedDate": 1461105380000,
			"knownAs": "Undefined Property",
			"internalReferences": [],
			"jurisdiction": "New Zealand",
			"agreementType": "Lease",
			"client": "Landlord",
			"currency": "NZD",
			"commercial": "Yes",
			"agreementMode": "Inactive",
			"commencementDate": "1425124800000",
			"totalAnnualRent": "0.00",
			"rent": {
			"premises": {
			"annual": "0.00",
			"monthly": "0.00",
			"weekly": "0.00"
			},
			"carparks": {
			"annual": "0.00",
			"monthly": "0.00",
			"weekly": "0.00"
			}
			},
			"initialState": {
			"agreement": {
			"agreementId": "7751",
			"agreementType": "Lease",
			"client": "Landlord",
			"currency": "NZD",
			"commercial": "Yes",
			"agreementMode": "Inactive",
			"commencementDate": "1425124800000",
			"totalAnnualRent": "0.00",
			"rent": {
			"premises": {
			"annual": "0.00",
			"monthly": "0.00",
			"weekly": "0.00"
			},
			"carparks": {
			"annual": "0.00",
			"monthly": "0.00",
			"weekly": "0.00"
			}
			},
			"parties": {
			"Landlord": [
			  {
			"entityId": "213",
			"entityName": "Mr DAve Philip Bromley"
			},
			  {
			"entityId": 6435,
			"entityName": "DAveo ltd"
			},
			  {
			"entityId": 6437,
			"entityName": "Mel"
			}
			],
			}
			}
			}
			},
			"relationships": {
			"events": {
			"links": {
			"self": "/organisations/1/agreements/7751/relationships/events/",
			"related": "/organisations/1/events/"
			},
			"data": [
			  {
			"type": "events",
			"id": "36761"
			},
			  {
			"type": "events",
			"id": "36762"
			},
			  {
			"type": "events",
			"id": "36763"
			},
			  {
			"type": "events",
			"id": "36764"
			}
			],
			},
			"organisations": {
			"links": {
			"self": "/organisations/1/agreements/7751/relationships/organisations/",
			"related": "/organisations/"
			},
			"data": [
			  {
			"type": "organisations",
			"id": "1"
			}
			],
			},
			"parties": {
			"Landlord": {
			"links": {
			"self": "/organisations/1/agreements/7751/relationships/parties/Landlord/",
			"related": "/organisations/1/entities/"
			},
			"data": [
			  {
			"type": "entities",
			"id": "213"
			},
			  {
			"type": "entities",
			"id": 6435
			},
			  {
			"type": "entities",
			"id": 6437
			}
			],
			}
			}
			}
			},
			  {
			"type": "agreements",
			"id": 7930,
			"attributes": {
			"insertedDate": 1423633816000,
			"insertedBy": 2,
			"updatedDate": 1461105380000,
			"knownAs": "Undefined Property",
			"internalReferences": [],
			"jurisdiction": "New Zealand",
			"agreementType": "Lease",
			"client": "Landlord",
			"currency": "NZD",
			"commercial": "Yes",
			"agreementMode": "Inactive",
			"commencementDate": "1425124800000",
			"expiryDate": "1429876800000",
			"totalAnnualRent": "0.00",
			"rent": {
			"premises": {
			"annual": "0.00",
			"monthly": "0.00",
			"weekly": "0.00"
			},
			"carparks": {
			"annual": "0.00",
			"monthly": "0.00",
			"weekly": "0.00"
			}
			},
			"paymentStartDate": "1427889600000",
			"paymentPeriod": "Monthly",
			"rentPaymentDay": "1st",
			"rentPaymentMonth": "January",
			"rentDay": "Sunday",
			"taxation": "Plus Tax",
			"initialState": {
			"agreement": {
			"agreementId": "7930",
			"agreementType": "Lease",
			"client": "Landlord",
			"currency": "NZD",
			"commercial": "Yes",
			"agreementMode": "Inactive",
			"commencementDate": "1425124800000",
			"expiryDate": "1429876800000",
			"totalAnnualRent": "0.00",
			"rent": {
			"premises": {
			"annual": "0.00",
			"monthly": "0.00",
			"weekly": "0.00"
			},
			"carparks": {
			"annual": "0.00",
			"monthly": "0.00",
			"weekly": "0.00"
			}
			},
			"paymentStartDate": "1427889600000",
			"paymentPeriod": "Monthly",
			"rentPaymentDay": "1st",
			"rentPaymentMonth": "January",
			"rentDay": "Sunday",
			"taxation": "Plus Tax",
			"parties": {}
			}
			}
			},
			"relationships": {
			"events": {
			"links": {
			"self": "/organisations/1/agreements/7930/relationships/events/",
			"related": "/organisations/1/events/"
			},
			"data": [
			  {
			"type": "events",
			"id": "35152"
			},
			  {
			"type": "events",
			"id": "35153"
			}
			],
			},
			"organisations": {
			"links": {
			"self": "/organisations/1/agreements/7930/relationships/organisations/",
			"related": "/organisations/"
			},
			"data": [
			  {
			"type": "organisations",
			"id": "1"
			}
			],
			}
			}
			},
			  {
			"type": "agreements",
			"id": 5476,
			"attributes": {
			"insertedDate": 1400458706000,
			"insertedBy": 226,
			"updatedDate": 1461105380000,
			"knownAs": "Undefined Property",
			"internalReferences": [
			  "5416"
			],
			"jurisdiction": "New Zealand",
			"agreementType": "Sublease",
			"client": "Sub Lessor:Guarantor",
			"currency": "NZD",
			"commercial": "Yes",
			"agreementMode": "Inactive",
			"commencementDate": "1401537600000",
			"totalAnnualRent": "0.00",
			"rent": {
			"premises": {
			"annual": "0.00",
			"monthly": "0.00",
			"weekly": "0.00"
			},
			"carparks": {
			"annual": "0.00",
			"monthly": "0.00",
			"weekly": "0.00"
			}
			},
			"initialState": {
			"agreement": {
			"agreementId": "5476",
			"agreementType": "Sublease",
			"client": "Sub Lessor:Guarantor",
			"currency": "NZD",
			"commercial": "Yes",
			"agreementMode": "Inactive",
			"commencementDate": "1401537600000",
			"totalAnnualRent": "0.00",
			"rent": {
			"premises": {
			"annual": "0.00",
			"monthly": "0.00",
			"weekly": "0.00"
			},
			"carparks": {
			"annual": "0.00",
			"monthly": "0.00",
			"weekly": "0.00"
			}
			},
			"parties": {}
			}
			}
			},
			"relationships": {
			"events": {
			"links": {
			"self": "/organisations/1/agreements/5476/relationships/events/",
			"related": "/organisations/1/events/"
			},
			"data": [
			  {
			"type": "events",
			"id": "1796"
			}
			],
			},
			"organisations": {
			"links": {
			"self": "/organisations/1/agreements/5476/relationships/organisations/",
			"related": "/organisations/"
			},
			"data": [
			  {
			"type": "organisations",
			"id": "1"
			}
			],
			}
			}
			},
			  {
			"type": "agreements",
			"id": 5747,
			"attributes": {
			"insertedDate": 1408567029000,
			"insertedBy": 2,
			"updatedDate": 1461105380000,
			"knownAs": "Undefined Property",
			"internalReferences": [],
			"jurisdiction": "New Zealand",
			"agreementType": "Lease",
			"client": "Landlord",
			"currency": "NZD",
			"commercial": "Yes",
			"agreementMode": "Inactive",
			"totalAnnualRent": "0.00",
			"rent": {
			"premises": {
			"annual": "0.00",
			"monthly": "0.00",
			"weekly": "0.00"
			},
			"carparks": {
			"annual": "0.00",
			"monthly": "0.00",
			"weekly": "0.00"
			}
			},
			"initialState": {
			"agreement": {
			"agreementId": "5747",
			"agreementType": "Lease",
			"client": "Landlord",
			"currency": "NZD",
			"commercial": "Yes",
			"agreementMode": "Inactive",
			"totalAnnualRent": "0.00",
			"rent": {
			"premises": {
			"annual": "0.00",
			"monthly": "0.00",
			"weekly": "0.00"
			},
			"carparks": {
			"annual": "0.00",
			"monthly": "0.00",
			"weekly": "0.00"
			}
			},
			"parties": {
			"Landlord": [
			  {
			"entityId": "752",
			"entityName": "Mr Hello Goodbye"
			}
			],
			"Tenant": [
			  {
			"entityId": "754",
			"entityName": "Mr Explorer Ltd"
			}
			],
			}
			}
			}
			},
			"relationships": {
			"organisations": {
			"links": {
			"self": "/organisations/1/agreements/5747/relationships/organisations/",
			"related": "/organisations/"
			},
			"data": [
			  {
			"type": "organisations",
			"id": "1"
			}
			],
			},
			"parties": {
			"Landlord": {
			"links": {
			"self": "/organisations/1/agreements/5747/relationships/parties/Landlord/",
			"related": "/organisations/1/entities/"
			},
			"data": [
			  {
			"type": "entities",
			"id": "752"
			}
			],
			},
			"Tenant": {
			"links": {
			"self": "/organisations/1/agreements/5747/relationships/parties/Tenant/",
			"related": "/organisations/1/entities/"
			},
			"data": [
			  {
			"type": "entities",
			"id": "754"
			}
			],
			}
			}
			}
			},
			  {
			"type": "agreements",
			"id": 5746,
			"attributes": {
			"insertedDate": 1408523545000,
			"insertedBy": 2,
			"updatedDate": 1461105380000,
			"knownAs": "Undefined Property",
			"internalReferences": [
			  "nfgn"
			],
			"jurisdiction": "New Zealand",
			"agreementType": "Lease",
			"client": "Landlord",
			"currency": "NZD",
			"commercial": "Yes",
			"agreementMode": "Inactive",
			"totalAnnualRent": "0.00",
			"rent": {
			"premises": {
			"annual": "0.00",
			"monthly": "0.00",
			"weekly": "0.00"
			},
			"carparks": {
			"annual": "0.00",
			"monthly": "0.00",
			"weekly": "0.00"
			}
			},
			"initialState": {
			"agreement": {
			"agreementId": "5746",
			"agreementType": "Lease",
			"client": "Landlord",
			"currency": "NZD",
			"commercial": "Yes",
			"agreementMode": "Inactive",
			"totalAnnualRent": "0.00",
			"rent": {
			"premises": {
			"annual": "0.00",
			"monthly": "0.00",
			"weekly": "0.00"
			},
			"carparks": {
			"annual": "0.00",
			"monthly": "0.00",
			"weekly": "0.00"
			}
			},
			"parties": {
			"Landlord": [
			  {
			"entityId": "213",
			"entityName": "Mr DAve Philip Bromley"
			}
			],
			"Tenant": [
			  {
			"entityId": "751",
			"entityName": "fred corp"
			}
			],
			}
			}
			}
			},
			"relationships": {
			"organisations": {
			"links": {
			"self": "/organisations/1/agreements/5746/relationships/organisations/",
			"related": "/organisations/"
			},
			"data": [
			  {
			"type": "organisations",
			"id": "1"
			}
			],
			},
			"parties": {
			"Landlord": {
			"links": {
			"self": "/organisations/1/agreements/5746/relationships/parties/Landlord/",
			"related": "/organisations/1/entities/"
			},
			"data": [
			  {
			"type": "entities",
			"id": "213"
			}
			],
			},
			"Tenant": {
			"links": {
			"self": "/organisations/1/agreements/5746/relationships/parties/Tenant/",
			"related": "/organisations/1/entities/"
			},
			"data": [
			  {
			"type": "entities",
			"id": "751"
			}
			],
			}
			}
			}
			},
			  {
			"type": "agreements",
			"id": 5497,
			"attributes": {
			"insertedDate": 1401144584000,
			"insertedBy": 2,
			"updatedDate": 1461105380000,
			"knownAs": "Undefined Property",
			"internalReferences": [],
			"jurisdiction": "New Zealand",
			"agreementType": "Lease",
			"client": "Landlord",
			"currency": "NZD",
			"commercial": "Yes",
			"agreementMode": "Inactive",
			"commencementDate": "1401537600000",
			"totalAnnualRent": "0.00",
			"rent": {
			"premises": {
			"annual": "0.00",
			"monthly": "0.00",
			"weekly": "0.00"
			},
			"carparks": {
			"annual": "0.00",
			"monthly": "0.00",
			"weekly": "0.00"
			}
			},
			"initialState": {
			"agreement": {
			"agreementId": "5497",
			"agreementType": "Lease",
			"client": "Landlord",
			"currency": "NZD",
			"commercial": "Yes",
			"agreementMode": "Inactive",
			"commencementDate": "1401537600000",
			"totalAnnualRent": "0.00",
			"rent": {
			"premises": {
			"annual": "0.00",
			"monthly": "0.00",
			"weekly": "0.00"
			},
			"carparks": {
			"annual": "0.00",
			"monthly": "0.00",
			"weekly": "0.00"
			}
			},
			"parties": {}
			}
			}
			},
			"relationships": {
			"events": {
			"links": {
			"self": "/organisations/1/agreements/5497/relationships/events/",
			"related": "/organisations/1/events/"
			},
			"data": [
			  {
			"type": "events",
			"id": "1963"
			}
			],
			},
			"organisations": {
			"links": {
			"self": "/organisations/1/agreements/5497/relationships/organisations/",
			"related": "/organisations/"
			},
			"data": [
			  {
			"type": "organisations",
			"id": "1"
			}
			],
			}
			}
			},
			  {
			"type": "agreements",
			"id": 5546,
			"attributes": {
			"insertedDate": 1402870293000,
			"insertedBy": 134,
			"updatedDate": 1461105380000,
			"knownAs": "Undefined Property",
			"internalReferences": [],
			"jurisdiction": "New Zealand",
			"agreementType": "Lease",
			"client": "Landlord",
			"currency": "NZD",
			"commercial": "Yes",
			"agreementMode": "Inactive",
			"totalAnnualRent": "0.00",
			"rent": {
			"premises": {
			"annual": "0.00",
			"monthly": "0.00",
			"weekly": "0.00"
			},
			"carparks": {
			"annual": "0.00",
			"monthly": "0.00",
			"weekly": "0.00"
			}
			},
			"initialState": {
			"agreement": {
			"agreementId": "5546",
			"agreementType": "Lease",
			"client": "Landlord",
			"currency": "NZD",
			"commercial": "Yes",
			"agreementMode": "Inactive",
			"totalAnnualRent": "0.00",
			"rent": {
			"premises": {
			"annual": "0.00",
			"monthly": "0.00",
			"weekly": "0.00"
			},
			"carparks": {
			"annual": "0.00",
			"monthly": "0.00",
			"weekly": "0.00"
			}
			},
			"parties": {}
			}
			}
			},
			"relationships": {
			"organisations": {
			"links": {
			"self": "/organisations/1/agreements/5546/relationships/organisations/",
			"related": "/organisations/"
			},
			"data": [
			  {
			"type": "organisations",
			"id": "1"
			}
			],
			}
			}
			},
			  {
			"type": "agreements",
			"id": 5566,
			"attributes": {
			"insertedDate": 1403145999000,
			"insertedBy": 2,
			"updatedDate": 1461105380000,
			"knownAs": "Undefined Property",
			"internalReferences": [],
			"jurisdiction": "New Zealand",
			"agreementType": "Lease",
			"client": "Landlord",
			"currency": "NZD",
			"commercial": "Yes",
			"agreementMode": "Inactive",
			"commencementDate": "1404129600000",
			"totalAnnualRent": "0.00",
			"rent": {
			"premises": {
			"annual": "0.00",
			"monthly": "0.00",
			"weekly": "0.00"
			},
			"carparks": {
			"annual": "0.00",
			"monthly": "0.00",
			"weekly": "0.00"
			}
			},
			"initialState": {
			"agreement": {
			"agreementId": "5566",
			"agreementType": "Lease",
			"client": "Landlord",
			"currency": "NZD",
			"commercial": "Yes",
			"agreementMode": "Inactive",
			"commencementDate": "1404129600000",
			"totalAnnualRent": "0.00",
			"rent": {
			"premises": {
			"annual": "0.00",
			"monthly": "0.00",
			"weekly": "0.00"
			},
			"carparks": {
			"annual": "0.00",
			"monthly": "0.00",
			"weekly": "0.00"
			}
			},
			"parties": {}
			}
			}
			},
			"relationships": {
			"events": {
			"links": {
			"self": "/organisations/1/agreements/5566/relationships/events/",
			"related": "/organisations/1/events/"
			},
			"data": [
			  {
			"type": "events",
			"id": "5748"
			}
			],
			},
			"organisations": {
			"links": {
			"self": "/organisations/1/agreements/5566/relationships/organisations/",
			"related": "/organisations/"
			},
			"data": [
			  {
			"type": "organisations",
			"id": "1"
			}
			],
			}
			}
			},
			  {
			"type": "agreements",
			"id": 5567,
			"attributes": {
			"insertedDate": 1403146040000,
			"insertedBy": 2,
			"updatedDate": 1461105380000,
			"knownAs": "Undefined Property",
			"internalReferences": [],
			"jurisdiction": "New Zealand",
			"agreementType": "Lease",
			"client": "Landlord",
			"currency": "NZD",
			"commercial": "Yes",
			"agreementMode": "Inactive",
			"totalAnnualRent": "0.00",
			"rent": {
			"premises": {
			"annual": "0.00",
			"monthly": "0.00",
			"weekly": "0.00"
			},
			"carparks": {
			"annual": "0.00",
			"monthly": "0.00",
			"weekly": "0.00"
			}
			},
			"initialState": {
			"agreement": {
			"agreementId": "5567",
			"agreementType": "Lease",
			"client": "Landlord",
			"currency": "NZD",
			"commercial": "Yes",
			"agreementMode": "Inactive",
			"totalAnnualRent": "0.00",
			"rent": {
			"premises": {
			"annual": "0.00",
			"monthly": "0.00",
			"weekly": "0.00"
			},
			"carparks": {
			"annual": "0.00",
			"monthly": "0.00",
			"weekly": "0.00"
			}
			},
			"parties": {}
			}
			}
			},
			"relationships": {
			"organisations": {
			"links": {
			"self": "/organisations/1/agreements/5567/relationships/organisations/",
			"related": "/organisations/"
			},
			"data": [
			  {
			"type": "organisations",
			"id": "1"
			}
			],
			}
			}
			},
			  {
			"type": "agreements",
			"id": 5568,
			"attributes": {
			"insertedDate": 1403146342000,
			"insertedBy": 2,
			"updatedDate": 1461105380000,
			"knownAs": "Undefined Property",
			"internalReferences": [],
			"jurisdiction": "New Zealand",
			"agreementType": "Lease",
			"client": "Landlord",
			"currency": "NZD",
			"commercial": "Yes",
			"agreementMode": "Inactive",
			"totalAnnualRent": "0.00",
			"rent": {
			"premises": {
			"annual": "0.00",
			"monthly": "0.00",
			"weekly": "0.00"
			},
			"carparks": {
			"annual": "0.00",
			"monthly": "0.00",
			"weekly": "0.00"
			}
			},
			"initialState": {
			"agreement": {
			"agreementId": "5568",
			"agreementType": "Lease",
			"client": "Landlord",
			"currency": "NZD",
			"commercial": "Yes",
			"agreementMode": "Inactive",
			"totalAnnualRent": "0.00",
			"rent": {
			"premises": {
			"annual": "0.00",
			"monthly": "0.00",
			"weekly": "0.00"
			},
			"carparks": {
			"annual": "0.00",
			"monthly": "0.00",
			"weekly": "0.00"
			}
			},
			"parties": {}
			}
			}
			},
			"relationships": {
			"organisations": {
			"links": {
			"self": "/organisations/1/agreements/5568/relationships/organisations/",
			"related": "/organisations/"
			},
			"data": [
			  {
			"type": "organisations",
			"id": "1"
			}
			],
			}
			}
			},
			  {
			"type": "agreements",
			"id": 5472,
			"attributes": {
			"insertedDate": 1400450228000,
			"insertedBy": 2,
			"updatedDate": 1461105380000,
			"knownAs": "Undefined Property",
			"internalReferences": [],
			"jurisdiction": "New Zealand",
			"agreementType": "Lease",
			"client": "Landlord",
			"currency": "NZD",
			"commercial": "Yes",
			"agreementMode": "Active",
			"commencementDate": "1401537600000",
			"totalAnnualRent": "0.00",
			"rent": {
			"premises": {
			"annual": "0.00",
			"monthly": "0.00",
			"weekly": "0.00"
			},
			"carparks": {
			"annual": "0.00",
			"monthly": "0.00",
			"weekly": "0.00"
			}
			},
			"initialState": {
			"agreement": {
			"agreementId": "5472",
			"agreementType": "Lease",
			"client": "Landlord",
			"currency": "NZD",
			"commercial": "Yes",
			"agreementMode": "Active",
			"commencementDate": "1401537600000",
			"totalAnnualRent": "0.00",
			"rent": {
			"premises": {
			"annual": "0.00",
			"monthly": "0.00",
			"weekly": "0.00"
			},
			"carparks": {
			"annual": "0.00",
			"monthly": "0.00",
			"weekly": "0.00"
			}
			},
			"parties": {}
			}
			}
			},
			"relationships": {
			"events": {
			"links": {
			"self": "/organisations/1/agreements/5472/relationships/events/",
			"related": "/organisations/1/events/"
			},
			"data": [
			  {
			"type": "events",
			"id": "1771"
			}
			],
			},
			"organisations": {
			"links": {
			"self": "/organisations/1/agreements/5472/relationships/organisations/",
			"related": "/organisations/"
			},
			"data": [
			  {
			"type": "organisations",
			"id": "1"
			}
			],
			}
			}
			},
			  {
			"type": "agreements",
			"id": 8072,
			"attributes": {
			"insertedDate": 1426719366000,
			"insertedBy": 2,
			"updatedDate": 1461044425000,
			"knownAs": "VERY COOL COOOOOOL LEASE",
			"legalDescription": "A certain tract of land situated in the Parish of Assumption, State of Louisiana, on the right descending bank of Bayou Lafourche, and forming part of the Trinity Plantation, and having a front on the public road of Bayou Lafourche of Two Hundred Eight and 70/100 (208.70’) feet with the same width in the rear, and running back from said public road, between parallel lines, the upper line of said lot measuring Nine Hundred and Eighty-two (982’) feet in length;",
			"internalReferences": [
			  "REF23",
			  "REF456",
			  "REF846"
			],
			"jurisdiction": "New Zealand",
			"agreementType": "Lease",
			"client": "Landlord",
			"currency": "NZD",
			"commercial": "Yes",
			"agreementMode": "Active",
			"commencementDate": "1426680000000",
			"expiryDate": "1427371200000",
			"totalAnnualRent": "302000.00",
			"rent": {
			"premises": {
			"annual": "300000.00",
			"monthly": "25000.00",
			"weekly": "5769.23"
			},
			"carparks": {
			"annual": "2000.00",
			"monthly": "166.67",
			"weekly": "38.46"
			}
			},
			"paymentStartDate": "1426680000000",
			"paymentPeriod": "Monthly",
			"rentPaymentDay": "1st",
			"rentPaymentMonth": "January",
			"rentDay": "Sunday",
			"taxation": "Incl. Tax",
			"proportionOfOutgoings": "30%",
			"additionalRent": "5%",
			"defaultInterestRate": "20%",
			"initialState": {
			"agreement": {
			"agreementId": "8072",
			"agreementType": "Lease",
			"client": "Landlord",
			"currency": "NZD",
			"commercial": "Yes",
			"agreementMode": "Active",
			"commencementDate": "1426680000000",
			"expiryDate": "1427371200000",
			"totalAnnualRent": "302000.00",
			"rent": {
			"premises": {
			"annual": "300000.00",
			"monthly": "25000.00",
			"weekly": "5769.23"
			},
			"carparks": {
			"annual": "2000.00",
			"monthly": "166.67",
			"weekly": "38.46"
			}
			},
			"paymentStartDate": "1426680000000",
			"paymentPeriod": "Monthly",
			"rentPaymentDay": "1st",
			"rentPaymentMonth": "January",
			"rentDay": "Sunday",
			"taxation": "Incl. Tax",
			"proportionOfOutgoings": "30%",
			"additionalRent": "5%",
			"defaultInterestRate": "20%",
			"parties": {
			"Guarantor": [
			  {
			"entityId": "6948",
			"entityName": "Allegiance of Niceness"
			}
			],
			"Landlord": [
			  {
			"entityId": "751",
			"entityName": "fred corp"
			}
			],
			"Tenant": [
			  {
			"entityId": "754",
			"entityName": "Mr Explorer Ltd"
			}
			],
			}
			}
			}
			},
			"relationships": {
			"properties": {
			"links": {
			"self": "/organisations/1/agreements/8072/relationships/properties/",
			"related": "/organisations/1/properties/"
			},
			"data": [
			  {
			"type": "properties",
			"id": "4990"
			},
			  {
			"type": "properties",
			"id": "4989"
			}
			],
			},
			"notes": {
			"links": {
			"self": "/organisations/1/agreements/8072/relationships/notes/",
			"related": "/organisations/1/notes/"
			},
			"data": [
			  {
			"type": "notes",
			"id": 111
			}
			],
			},
			"events": {
			"links": {
			"self": "/organisations/1/agreements/8072/relationships/events/",
			"related": "/organisations/1/events/"
			},
			"data": [
			  {
			"type": "events",
			"id": "44285"
			},
			  {
			"type": "events",
			"id": "44286"
			},
			  {
			"type": "events",
			"id": "44294"
			},
			  {
			"type": "events",
			"id": "44521"
			},
			  {
			"type": "events",
			"id": "44523"
			},
			  {
			"type": "events",
			"id": "44524"
			},
			  {
			"type": "events",
			"id": "44528"
			},
			  {
			"type": "events",
			"id": "44532"
			},
			  {
			"type": "events",
			"id": "44534"
			},
			  {
			"type": "events",
			"id": "44536"
			},
			  {
			"type": "events",
			"id": "44538"
			},
			  {
			"type": "events",
			"id": "45311"
			},
			  {
			"type": "events",
			"id": "45468"
			},
			  {
			"type": "events",
			"id": "45469"
			},
			  {
			"type": "events",
			"id": "45470"
			},
			  {
			"type": "events",
			"id": "45471"
			},
			  {
			"type": "events",
			"id": "45472"
			}
			],
			},
			"organisations": {
			"links": {
			"self": "/organisations/1/agreements/8072/relationships/organisations/",
			"related": "/organisations/"
			},
			"data": [
			  {
			"type": "organisations",
			"id": "1"
			}
			],
			},
			"parties": {
			"Guarantor": {
			"links": {
			"self": "/organisations/1/agreements/8072/relationships/parties/Guarantor/",
			"related": "/organisations/1/entities/"
			},
			"data": [
			  {
			"type": "entities",
			"id": "6948"
			}
			],
			},
			"Landlord": {
			"links": {
			"self": "/organisations/1/agreements/8072/relationships/parties/Landlord/",
			"related": "/organisations/1/entities/"
			},
			"data": [
			  {
			"type": "entities",
			"id": "751"
			}
			],
			},
			"Tenant": {
			"links": {
			"self": "/organisations/1/agreements/8072/relationships/parties/Tenant/",
			"related": "/organisations/1/entities/"
			},
			"data": [
			  {
			"type": "entities",
			"id": "754"
			}
			],
			}
			}
			}
			},
			  {
			"type": "agreements",
			"id": 54531,
			"attributes": {
			"insertedDate": 1449023118000,
			"insertedBy": 2,
			"updatedDate": 1449023173000,
			"updatedBy": 2,
			"knownAs": "Zanna test",
			"internalReferences": [],
			"jurisdiction": "New Zealand",
			"agreementType": "Lease",
			"client": "Landlord",
			"currency": "NZD",
			"commercial": "Yes",
			"agreementMode": "Active",
			"totalAnnualRent": "5000.00",
			"rent": {
			"premises": {
			"annual": "5000.00",
			"monthly": "416.67",
			"weekly": "96.15"
			},
			"carparks": {
			"annual": "0.00",
			"monthly": "0.00",
			"weekly": "0.00"
			}
			},
			"paymentStartDate": "1349006400000",
			"paymentPeriod": "Monthly",
			"rentPaymentDay": "1st",
			"rentPaymentMonth": "January",
			"rentDay": "Sunday",
			"taxation": "Plus Tax",
			"initialState": {
			"agreement": {
			"agreementId": "54531",
			"agreementType": "Lease",
			"client": "Landlord",
			"currency": "NZD",
			"commercial": "Yes",
			"agreementMode": "Inactive",
			"totalAnnualRent": "5000.00",
			"rent": {
			"premises": {
			"annual": "5000.00",
			"monthly": "416.67",
			"weekly": "96.15"
			},
			"carparks": {
			"annual": "0.00",
			"monthly": "0.00",
			"weekly": "0.00"
			}
			},
			"paymentStartDate": "1349006400000",
			"paymentPeriod": "Monthly",
			"rentPaymentDay": "1st",
			"rentPaymentMonth": "January",
			"rentDay": "Sunday",
			"taxation": "Plus Tax",
			"parties": {}
			}
			},
			"commencementDate": "1349006400000",
			"expiryDate": "1632916800000"
			},
			"relationships": {
			"events": {
			"links": {
			"self": "/organisations/1/agreements/54531/relationships/events/",
			"related": "/organisations/1/events/"
			},
			"data": [
			  {
			"type": "events",
			"id": "117813"
			},
			  {
			"type": "events",
			"id": "117814"
			},
			  {
			"type": "events",
			"id": "117816"
			},
			  {
			"type": "events",
			"id": "117818"
			}
			],
			},
			"organisations": {
			"links": {
			"self": "/organisations/1/agreements/54531/relationships/organisations/",
			"related": "/organisations/"
			},
			"data": [
			  {
			"type": "organisations",
			"id": "1"
			}
			],
			}
			}
			},
			  {
			"type": "agreements",
			"id": 8453,
			"attributes": {
			"insertedDate": 1432502914000,
			"insertedBy": 2,
			"updatedDate": 1439622385000,
			"knownAs": "dave no property test",
			"internalReferences": [],
			"jurisdiction": "New Zealand",
			"agreementType": "Lease",
			"client": "Landlord",
			"currency": "NZD",
			"commercial": "Yes",
			"agreementMode": "Inactive",
			"commencementDate": "1430395200000",
			"totalAnnualRent": "555.00",
			"rent": {
			"premises": {
			"annual": "555.00",
			"monthly": "46.25",
			"weekly": "10.67"
			},
			"carparks": {
			"annual": "0.00",
			"monthly": "0.00",
			"weekly": "0.00"
			}
			},
			"paymentStartDate": "1432728000000",
			"paymentPeriod": "Monthly",
			"rentPaymentDay": "1st",
			"rentPaymentMonth": "January",
			"rentDay": "Sunday",
			"taxation": "Plus Tax",
			"initialState": {
			"agreement": {
			"agreementId": "8453",
			"agreementType": "Lease",
			"client": "Landlord",
			"currency": "NZD",
			"commercial": "Yes",
			"agreementMode": "Inactive",
			"commencementDate": "1430395200000",
			"totalAnnualRent": "555.00",
			"rent": {
			"premises": {
			"annual": "555.00",
			"monthly": "46.25",
			"weekly": "10.67"
			},
			"carparks": {
			"annual": "0.00",
			"monthly": "0.00",
			"weekly": "0.00"
			}
			},
			"paymentStartDate": "1432728000000",
			"paymentPeriod": "Monthly",
			"rentPaymentDay": "1st",
			"rentPaymentMonth": "January",
			"rentDay": "Sunday",
			"taxation": "Plus Tax",
			"parties": {
			"Landlord": [
			  {
			"entityId": "7476",
			"entityName": "Another Company"
			}
			],
			"Tenant": [
			  {
			"entityId": "214",
			"entityName": "Jill Maloney Trust"
			}
			],
			}
			}
			}
			},
			"relationships": {
			"events": {
			"links": {
			"self": "/organisations/1/agreements/8453/relationships/events/",
			"related": "/organisations/1/events/"
			},
			"data": [
			  {
			"type": "events",
			"id": "55550"
			}
			],
			},
			"organisations": {
			"links": {
			"self": "/organisations/1/agreements/8453/relationships/organisations/",
			"related": "/organisations/"
			},
			"data": [
			  {
			"type": "organisations",
			"id": "1"
			}
			],
			},
			"parties": {
			"Landlord": {
			"links": {
			"self": "/organisations/1/agreements/8453/relationships/parties/Landlord/",
			"related": "/organisations/1/entities/"
			},
			"data": [
			  {
			"type": "entities",
			"id": "7476"
			}
			],
			},
			"Tenant": {
			"links": {
			"self": "/organisations/1/agreements/8453/relationships/parties/Tenant/",
			"related": "/organisations/1/entities/"
			},
			"data": [
			  {
			"type": "entities",
			"id": "214"
			}
			],
			}
			}
			}
			},
			  {
			"type": "agreements",
			"id": 9223,
			"attributes": {
			"insertedDate": 1437972825000,
			"insertedBy": 2,
			"updatedDate": 1461044426000,
			"knownAs": "fixed event test",
			"internalReferences": [],
			"jurisdiction": "New Zealand",
			"agreementType": "Lease",
			"client": "Landlord",
			"currency": "NZD",
			"commercial": "Yes",
			"agreementMode": "Inactive",
			"commencementDate": "1277899200000",
			"expiryDate": "1593432000000",
			"totalAnnualRent": "90000.00",
			"rent": {
			"premises": {
			"annual": "90000.00",
			"monthly": "7500.00",
			"weekly": "1730.77"
			},
			"carparks": {
			"annual": "0.00",
			"monthly": "0.00",
			"weekly": "0.00"
			}
			},
			"paymentStartDate": "1277899200000",
			"paymentPeriod": "Monthly",
			"rentPaymentDay": "1st",
			"rentPaymentMonth": "January",
			"rentDay": "Sunday",
			"taxation": "Plus Tax",
			"initialState": {
			"agreement": {
			"agreementId": "9223",
			"agreementType": "Lease",
			"client": "Landlord",
			"currency": "NZD",
			"commercial": "Yes",
			"agreementMode": "Inactive",
			"commencementDate": "1277899200000",
			"expiryDate": "1593432000000",
			"totalAnnualRent": "90000.00",
			"rent": {
			"premises": {
			"annual": "90000.00",
			"monthly": "7500.00",
			"weekly": "1730.77"
			},
			"carparks": {
			"annual": "0.00",
			"monthly": "0.00",
			"weekly": "0.00"
			}
			},
			"paymentStartDate": "1277899200000",
			"paymentPeriod": "Monthly",
			"rentPaymentDay": "1st",
			"rentPaymentMonth": "January",
			"rentDay": "Sunday",
			"taxation": "Plus Tax",
			"parties": {
			"Landlord": [
			  {
			"entityId": "7168",
			"entityName": "New Company"
			}
			],
			"Tenant": [
			  {
			"entityId": "7703",
			"entityName": "test dave"
			}
			],
			}
			}
			}
			},
			"relationships": {
			"properties": {
			"links": {
			"self": "/organisations/1/agreements/9223/relationships/properties/",
			"related": "/organisations/1/properties/"
			},
			"data": [
			  {
			"type": "properties",
			"id": "2385"
			}
			],
			},
			"events": {
			"links": {
			"self": "/organisations/1/agreements/9223/relationships/events/",
			"related": "/organisations/1/events/"
			},
			"data": [
			  {
			"type": "events",
			"id": "75939"
			},
			  {
			"type": "events",
			"id": "75940"
			},
			  {
			"type": "events",
			"id": "75944"
			},
			  {
			"type": "events",
			"id": "75979"
			},
			  {
			"type": "events",
			"id": "75981"
			},
			  {
			"type": "events",
			"id": "75983"
			}
			],
			},
			"organisations": {
			"links": {
			"self": "/organisations/1/agreements/9223/relationships/organisations/",
			"related": "/organisations/"
			},
			"data": [
			  {
			"type": "organisations",
			"id": "1"
			}
			],
			},
			"parties": {
			"Landlord": {
			"links": {
			"self": "/organisations/1/agreements/9223/relationships/parties/Landlord/",
			"related": "/organisations/1/entities/"
			},
			"data": [
			  {
			"type": "entities",
			"id": "7168"
			}
			],
			},
			"Tenant": {
			"links": {
			"self": "/organisations/1/agreements/9223/relationships/parties/Tenant/",
			"related": "/organisations/1/entities/"
			},
			"data": [
			  {
			"type": "entities",
			"id": "7703"
			}
			],
			}
			}
			}
			},
			  {
			"type": "agreements",
			"id": 5474,
			"attributes": {
			"insertedDate": 1400456080000,
			"insertedBy": 2,
			"updatedDate": 1461105380000,
			"knownAs": "gagagag, fdfd, 999 Colombo St, Christchurch",
			"internalReferences": [],
			"jurisdiction": "New Zealand",
			"agreementType": "License",
			"client": "Guarantor",
			"currency": "NZD",
			"commercial": "Yes",
			"agreementMode": "Active",
			"commencementDate": "1403611200000",
			"expiryDate": "1430222400000",
			"totalAnnualRent": "0.00",
			"rent": {
			"premises": {
			"annual": "0.00",
			"monthly": "0.00",
			"weekly": "0.00"
			},
			"carparks": {
			"annual": "0.00",
			"monthly": "0.00",
			"weekly": "0.00"
			}
			},
			"paymentStartDate": "1316779200000",
			"paymentPeriod": "Annual",
			"rentPaymentDay": "7th",
			"rentPaymentMonth": "August",
			"rentDay": "Sunday",
			"taxation": "Plus Tax",
			"fileNotes": "hgkyhgfkj j jyjfghjghjnSign in to Office 365 mail.office365.com/ Illustration for Office 365. It looks like you're on a slow connection. We've disabled some images to speed things up. We can't sign you in :-(. Your browser is ... You've visited this page many times. Last visit: 17/05/14 News for office 365 SherWeb Offers Microsoft Office 365 Alternative Talkin' Cloud ?- 1 day ago SherWeb's SkyOffice 2013 suite pulls together Hosted Exchange 2013, Hosted SharePoint 2013, Hosted Lync 2013 and SkyNox 2013, offering ... Microsoft TechEd: Office 365 Gets Smarter InformationWeek? - by Michael Endler? - 4 days ago ",
			"initialState": {
			"agreement": {
			"agreementId": "5474",
			"agreementType": "License",
			"client": "Guarantor",
			"currency": "NZD",
			"commercial": "Yes",
			"agreementMode": "Active",
			"commencementDate": "1403611200000",
			"expiryDate": "1430222400000",
			"totalAnnualRent": "0.00",
			"rent": {
			"premises": {
			"annual": "0.00",
			"monthly": "0.00",
			"weekly": "0.00"
			},
			"carparks": {
			"annual": "0.00",
			"monthly": "0.00",
			"weekly": "0.00"
			}
			},
			"paymentStartDate": "1316779200000",
			"paymentPeriod": "Annual",
			"rentPaymentDay": "7th",
			"rentPaymentMonth": "August",
			"rentDay": "Sunday",
			"taxation": "Plus Tax",
			"fileNotes": "hgkyhgfkj j jyjfghjghjnSign in to Office 365 mail.office365.com/ Illustration for Office 365. It looks like you're on a slow connection. We've disabled some images to speed things up. We can't sign you in :-(. Your browser is ... You've visited this page many times. Last visit: 17/05/14 News for office 365 SherWeb Offers Microsoft Office 365 Alternative Talkin' Cloud ?- 1 day ago SherWeb's SkyOffice 2013 suite pulls together Hosted Exchange 2013, Hosted SharePoint 2013, Hosted Lync 2013 and SkyNox 2013, offering ... Microsoft TechEd: Office 365 Gets Smarter InformationWeek? - by Michael Endler? - 4 days ago ",
			"parties": {
			"Licensor": [
			  {
			"entityId": "213",
			"entityName": "Mr DAve Philip Bromley"
			}
			],
			"Licensee": [
			  {
			"entityId": "213",
			"entityName": "Mr DAve Philip Bromley"
			}
			],
			"Guarantor": [
			  {
			"entityId": "214",
			"entityName": "Jill Maloney Trust"
			}
			],
			}
			}
			}
			},
			"relationships": {
			"properties": {
			"links": {
			"self": "/organisations/1/agreements/5474/relationships/properties/",
			"related": "/organisations/1/properties/"
			},
			"data": [
			  {
			"type": "properties",
			"id": "4984"
			},
			  {
			"type": "properties",
			"id": "4983"
			},
			  {
			"type": "properties",
			"id": "152"
			}
			],
			},
			"events": {
			"links": {
			"self": "/organisations/1/agreements/5474/relationships/events/",
			"related": "/organisations/1/events/"
			},
			"data": [
			  {
			"type": "events",
			"id": "1772"
			},
			  {
			"type": "events",
			"id": "1773"
			},
			  {
			"type": "events",
			"id": "1774"
			},
			  {
			"type": "events",
			"id": "1775"
			},
			  {
			"type": "events",
			"id": "1776"
			},
			  {
			"type": "events",
			"id": "1777"
			},
			  {
			"type": "events",
			"id": "1778"
			},
			  {
			"type": "events",
			"id": "1779"
			},
			  {
			"type": "events",
			"id": "1780"
			},
			  {
			"type": "events",
			"id": "1781"
			},
			  {
			"type": "events",
			"id": "1795"
			}
			],
			},
			"organisations": {
			"links": {
			"self": "/organisations/1/agreements/5474/relationships/organisations/",
			"related": "/organisations/"
			},
			"data": [
			  {
			"type": "organisations",
			"id": "1"
			}
			],
			},
			"parties": {
			"Licensor": {
			"links": {
			"self": "/organisations/1/agreements/5474/relationships/parties/Licensor/",
			"related": "/organisations/1/entities/"
			},
			"data": [
			  {
			"type": "entities",
			"id": "213"
			}
			],
			},
			"Licensee": {
			"links": {
			"self": "/organisations/1/agreements/5474/relationships/parties/Licensee/",
			"related": "/organisations/1/entities/"
			},
			"data": [
			  {
			"type": "entities",
			"id": "213"
			}
			],
			},
			"Guarantor": {
			"links": {
			"self": "/organisations/1/agreements/5474/relationships/parties/Guarantor/",
			"related": "/organisations/1/entities/"
			},
			"data": [
			  {
			"type": "entities",
			"id": "214"
			}
			],
			}
			}
			}
			},
			  {
			"type": "agreements",
			"id": 36243,
			"attributes": {
			"insertedDate": 1445391153000,
			"insertedBy": 2,
			"knownAs": "gfdbfg ",
			"internalReferences": [],
			"jurisdiction": "New Zealand",
			"agreementType": "Lease",
			"client": "Landlord",
			"currency": "NZD",
			"commercial": "Yes",
			"agreementMode": "Inactive",
			"totalAnnualRent": "0.00",
			"rent": {
			"premises": {
			"annual": "0.00",
			"monthly": "0.00",
			"weekly": "0.00"
			},
			"carparks": {
			"annual": "0.00",
			"monthly": "0.00",
			"weekly": "0.00"
			}
			},
			"initialState": {
			"agreement": {
			"agreementId": "36243",
			"agreementType": "Lease",
			"client": "Landlord",
			"currency": "NZD",
			"commercial": "Yes",
			"agreementMode": "Inactive",
			"totalAnnualRent": "0.00",
			"rent": {
			"premises": {
			"annual": "0.00",
			"monthly": "0.00",
			"weekly": "0.00"
			},
			"carparks": {
			"annual": "0.00",
			"monthly": "0.00",
			"weekly": "0.00"
			}
			},
			"parties": {}
			}
			}
			},
			"relationships": {
			"organisations": {
			"links": {
			"self": "/organisations/1/agreements/36243/relationships/organisations/",
			"related": "/organisations/"
			},
			"data": [
			  {
			"type": "organisations",
			"id": "1"
			}
			],
			}
			}
			}
			],
			}
	},
	696: {
		users: {
			"meta": {
			"total-rows": "1",
			"total-pages": 1
			},
			"links": {
			"self": "/users/2?userId=2&organisationId=696"
			},
			"data": [
			  {
			"type": "users",
			"id": 2,
			"attributes": {
			"audit": {
			"insertedDate": 1382328111000,
			"insertedBy": 0,
			"updatedDate": 1468899111000,
			"updatedBy": 0
			},
			"username": "Dave",
			"firstName": "David",
			"surname": "Bromley",
			"rememberMe": "No",
			"passwordResetRequired": "No",
			"lastLoggedInDate": 1468899111000,
			"acceptTermsAndConditions": 1406577512000,
			"loginEmail": "dave@nomosone.com",
			"walkThrough": [],
			"walkThroughNotification": true,
			"toDo": {
			"toDos": [],
			"viewMode": "all"
			},
			"seenNewDashboardWelcome": true,
			"navigatorMode": "expand"
			}
			}
			],
		},
		agreements: {
"meta": {
"total-rows": "15",
"total-pages": 1
},
"links": {
"self": "/organisations/696/agreements?sort=knownAs&offset=0&rows=200"
},
"data": [
  {
"type": "agreements",
"id": 55410,
"attributes": {
"insertedDate": 1449199978000,
"updatedDate": 1461044426000,
"knownAs": "2015 World Cup",
"legalDescription": "All of the stadium, changing rooms and facilities.",
"internalReferences": [],
"jurisdiction": "New Zealand",
"agreementType": "Lease",
"client": "Tenant",
"currency": "NZD",
"commercial": "Yes",
"agreementMode": "Active",
"commencementDate": "1448452800000",
"expiryDate": "1921752000000",
"totalAnnualRent": "16500.00",
"rent": {
"premises": {
"annual": "15000.00",
"monthly": "1250.00",
"weekly": "288.46"
},
"carparks": {
"annual": "1500.00",
"monthly": "125.00",
"weekly": "28.85"
}
},
"paymentStartDate": "1448452800000",
"paymentPeriod": "Monthly",
"rentPaymentDay": "1st",
"rentPaymentMonth": "January",
"rentDay": "Sunday",
"taxation": "Plus Tax",
"proportionOfOutgoings": "100%",
"defaultInterestRate": "15% per annum",
"fileNotes": "The information in the wizard can be used to create reports tailored to your needs.",
"businessUse": "Rugby",
"originalDeedMadeDate": "1450008000000",
"initialState": {
"agreement": {
"agreementId": "55410",
"agreementType": "Lease",
"client": "Tenant",
"currency": "NZD",
"commercial": "Yes",
"agreementMode": "Active",
"commencementDate": "1448452800000",
"expiryDate": "1921752000000",
"totalAnnualRent": "16500.00",
"rent": {
"premises": {
"annual": "15000.00",
"monthly": "1250.00",
"weekly": "288.46"
},
"carparks": {
"annual": "1500.00",
"monthly": "125.00",
"weekly": "28.85"
}
},
"paymentStartDate": "1448452800000",
"paymentPeriod": "Monthly",
"rentPaymentDay": "1st",
"rentPaymentMonth": "January",
"rentDay": "Sunday",
"taxation": "Plus Tax",
"proportionOfOutgoings": "100%",
"defaultInterestRate": "15% per annum",
"fileNotes": "The information in the wizard can be used to create reports tailored to your needs.",
"businessUse": "Rugby",
"originalDeedMadeDate": "1450008000000",
"parties": {
"Landlord": [
  {
"entityId": "12993",
"entityName": "All Blacks"
}
],
"Tenant": [
  {
"entityId": "12996",
"entityName": "Wallabies"
}
],
}
}
}
},
"relationships": {
"properties": {
"links": {
"self": "/organisations/696/agreements/55410/relationships/properties/",
"related": "/organisations/696/properties/"
},
"data": [
  {
"type": "properties",
"id": "11081"
},
  {
"type": "properties",
"id": "3309"
}
],
},
"notes": {
"links": {
"self": "/organisations/696/agreements/55410/relationships/notes/",
"related": "/organisations/696/notes/"
},
"data": [
  {
"type": "notes",
"id": 619
},
  {
"type": "notes",
"id": 618
},
  {
"type": "notes",
"id": 617
}
],
},
"events": {
"links": {
"self": "/organisations/696/agreements/55410/relationships/events/",
"related": "/organisations/696/events/"
},
"data": [
  {
"type": "events",
"id": "118875"
},
  {
"type": "events",
"id": "118876"
},
  {
"type": "events",
"id": "118877"
},
  {
"type": "events",
"id": "118878"
},
  {
"type": "events",
"id": "118879"
},
  {
"type": "events",
"id": "118880"
},
  {
"type": "events",
"id": "118881"
},
  {
"type": "events",
"id": "118882"
},
  {
"type": "events",
"id": "118883"
},
  {
"type": "events",
"id": "118884"
},
  {
"type": "events",
"id": "118885"
},
  {
"type": "events",
"id": "118886"
},
  {
"type": "events",
"id": "118887"
},
  {
"type": "events",
"id": "118888"
},
  {
"type": "events",
"id": "118889"
},
  {
"type": "events",
"id": "118890"
},
  {
"type": "events",
"id": "118891"
}
],
},
"organisations": {
"links": {
"self": "/organisations/696/agreements/55410/relationships/organisations/",
"related": "/organisations/"
},
"data": [
  {
"type": "organisations",
"id": "696"
}
],
},
"parties": {
"Landlord": {
"links": {
"self": "/organisations/696/agreements/55410/relationships/parties/Landlord/",
"related": "/organisations/696/entities/"
},
"data": [
  {
"type": "entities",
"id": "12993"
}
],
},
"Tenant": {
"links": {
"self": "/organisations/696/agreements/55410/relationships/parties/Tenant/",
"related": "/organisations/696/entities/"
},
"data": [
  {
"type": "entities",
"id": "12996"
}
],
}
}
}
},
  {
"type": "agreements",
"id": 55398,
"attributes": {
"insertedDate": 1449199978000,
"updatedDate": 1461044426000,
"knownAs": "213 Business Park",
"legalDescription": "The warehouse at 213 Business Park Drive, and all the space inside the walls. ",
"internalReferences": [
  "152125125"
],
"jurisdiction": "New Zealand",
"agreementType": "Lease",
"client": "Tenant",
"currency": "USD",
"commercial": "Yes",
"agreementMode": "Active",
"commencementDate": "1181649600000",
"expiryDate": "1812715200000",
"totalAnnualRent": "25000.00",
"rent": {
"premises": {
"annual": "20000.00",
"monthly": "1666.67",
"weekly": "384.62"
},
"carparks": {
"annual": "5000.00",
"monthly": "416.67",
"weekly": "96.15"
}
},
"paymentStartDate": "1181649600000",
"paymentPeriod": "Annual",
"rentPaymentDay": "1st",
"rentPaymentMonth": "May",
"rentDay": "Sunday",
"taxation": "Plus Tax",
"proportionOfOutgoings": "100%",
"additionalRent": "n/a",
"defaultInterestRate": "50%",
"fileNotes": "tell your users whatever you like with file notes.",
"businessUse": "headquaters",
"publicRiskInsuranceSum": "50000",
"hoursOfAccess": "24 hours",
"airConditioningDays": "7 days a week",
"airConditioningHours": "7am to 7pm",
"bankGuaranteeSum": "100000",
"originalDeedMadeDate": "1006430400000",
"initialState": {
"agreement": {
"agreementId": "55398",
"agreementType": "Lease",
"client": "Tenant",
"currency": "USD",
"commercial": "Yes",
"agreementMode": "Active",
"commencementDate": "1181649600000",
"expiryDate": "1812715200000",
"totalAnnualRent": "25000.00",
"rent": {
"premises": {
"annual": "20000.00",
"monthly": "1666.67",
"weekly": "384.62"
},
"carparks": {
"annual": "5000.00",
"monthly": "416.67",
"weekly": "96.15"
}
},
"paymentStartDate": "1181649600000",
"paymentPeriod": "Annual",
"rentPaymentDay": "1st",
"rentPaymentMonth": "May",
"rentDay": "Sunday",
"taxation": "Plus Tax",
"proportionOfOutgoings": "100%",
"additionalRent": "n/a",
"defaultInterestRate": "50%",
"fileNotes": "tell your users whatever you like with file notes.",
"businessUse": "headquaters",
"publicRiskInsuranceSum": "50000",
"hoursOfAccess": "24 hours",
"airConditioningDays": "7 days a week",
"airConditioningHours": "7am to 7pm",
"bankGuaranteeSum": "100000",
"originalDeedMadeDate": "1006430400000",
"parties": {
"Landlord": [
  {
"entityId": "12982",
"entityName": "Lisa Simpson"
},
  {
"entityId": 12984,
"entityName": "Maggie Simpson"
}
],
"Tenant": [
  {
"entityId": "12987",
"entityName": "Simpson Family Trust"
}
],
"Guarantor": [
  {
"entityId": "12985",
"entityName": "Simpson Limited"
}
],
}
}
}
},
"relationships": {
"properties": {
"links": {
"self": "/organisations/696/agreements/55398/relationships/properties/",
"related": "/organisations/696/properties/"
},
"data": [
  {
"type": "properties",
"id": "11075"
},
  {
"type": "properties",
"id": "11074"
},
  {
"type": "properties",
"id": "3303"
}
],
},
"events": {
"links": {
"self": "/organisations/696/agreements/55398/relationships/events/",
"related": "/organisations/696/events/"
},
"data": [
  {
"type": "events",
"id": "118745"
},
  {
"type": "events",
"id": "118746"
},
  {
"type": "events",
"id": "118747"
},
  {
"type": "events",
"id": "118748"
},
  {
"type": "events",
"id": "118749"
},
  {
"type": "events",
"id": "118750"
},
  {
"type": "events",
"id": "118751"
},
  {
"type": "events",
"id": "118752"
},
  {
"type": "events",
"id": "118753"
},
  {
"type": "events",
"id": "118754"
},
  {
"type": "events",
"id": "118755"
},
  {
"type": "events",
"id": "118756"
},
  {
"type": "events",
"id": "118757"
},
  {
"type": "events",
"id": "118758"
},
  {
"type": "events",
"id": "118759"
},
  {
"type": "events",
"id": "118760"
},
  {
"type": "events",
"id": "118761"
},
  {
"type": "events",
"id": "118762"
},
  {
"type": "events",
"id": "118763"
},
  {
"type": "events",
"id": "118764"
},
  {
"type": "events",
"id": "118765"
},
  {
"type": "events",
"id": "118766"
},
  {
"type": "events",
"id": "118767"
},
  {
"type": "events",
"id": "118768"
},
  {
"type": "events",
"id": "118769"
},
  {
"type": "events",
"id": "118770"
},
  {
"type": "events",
"id": "118771"
},
  {
"type": "events",
"id": "118772"
},
  {
"type": "events",
"id": "118773"
},
  {
"type": "events",
"id": "118774"
},
  {
"type": "events",
"id": "118775"
},
  {
"type": "events",
"id": "118776"
},
  {
"type": "events",
"id": "118777"
},
  {
"type": "events",
"id": "118778"
},
  {
"type": "events",
"id": "118779"
},
  {
"type": "events",
"id": "118780"
}
],
},
"organisations": {
"links": {
"self": "/organisations/696/agreements/55398/relationships/organisations/",
"related": "/organisations/"
},
"data": [
  {
"type": "organisations",
"id": "696"
}
],
},
"parties": {
"Landlord": {
"links": {
"self": "/organisations/696/agreements/55398/relationships/parties/Landlord/",
"related": "/organisations/696/entities/"
},
"data": [
  {
"type": "entities",
"id": "12982"
},
  {
"type": "entities",
"id": 12984
}
],
},
"Tenant": {
"links": {
"self": "/organisations/696/agreements/55398/relationships/parties/Tenant/",
"related": "/organisations/696/entities/"
},
"data": [
  {
"type": "entities",
"id": "12987"
}
],
},
"Guarantor": {
"links": {
"self": "/organisations/696/agreements/55398/relationships/parties/Guarantor/",
"related": "/organisations/696/entities/"
},
"data": [
  {
"type": "entities",
"id": "12985"
}
],
}
}
}
},
  {
"type": "agreements",
"id": 55394,
"attributes": {
"insertedDate": 1449199978000,
"updatedDate": 1461226206000,
"knownAs": "Basement, 123 London Street, Dunedin",
"legalDescription": "The basement at 123 London Street, Dunedin.",
"internalReferences": [
  "asfasf3326"
],
"jurisdiction": "New Zealand",
"agreementType": "Lease",
"client": "Landlord",
"currency": "NZD",
"commercial": "Yes",
"agreementMode": "Active",
"commencementDate": "1447329600000",
"expiryDate": "1762862400000",
"totalAnnualRent": "61040.00",
"rent": {
"premises": {
"annual": "60000.00",
"monthly": "5000.00",
"weekly": "1162.79"
},
"carparks": {
"annual": "1040.00",
"monthly": "86.67",
"weekly": "20.00"
}
},
"paymentStartDate": "1447329600000",
"paymentPeriod": "Monthly",
"rentPaymentDay": "1st",
"rentPaymentMonth": "January",
"rentDay": "Sunday",
"taxation": "Plus Tax",
"proportionOfOutgoings": "15%",
"defaultInterestRate": "14%",
"fileNotes": "Did you know you can create your own custom fields for this page?\n\nGo to the &amp;amp;quot;Settings&amp;amp;quot; tab &amp;amp;gt; &amp;amp;quot;Custom Fields&amp;amp;quot; &amp;amp;gt; &amp;amp;quot;Add new field&amp;amp;quot;.\n\nOnce you have saved a new custom field, it will appear at the bottom of this page. You can then save information against the system and report on it immediately.",
"businessUse": "Commercial Storage",
"hoursOfAccess": "24 hours",
"originalDeedMadeDate": "1447848000000",
"initialState": {
"agreement": {
"agreementId": "55394",
"agreementType": "Lease",
"client": "Landlord",
"currency": "NZD",
"commercial": "Yes",
"agreementMode": "Active",
"commencementDate": "1447329600000",
"expiryDate": "1762862400000",
"totalAnnualRent": "61040.00",
"rent": {
"premises": {
"annual": "60000.00",
"monthly": "5000.00",
"weekly": "1162.79"
},
"carparks": {
"annual": "1040.00",
"monthly": "86.67",
"weekly": "20.00"
}
},
"paymentStartDate": "1447329600000",
"paymentPeriod": "Monthly",
"rentPaymentDay": "1st",
"rentPaymentMonth": "January",
"rentDay": "Sunday",
"taxation": "Plus Tax",
"proportionOfOutgoings": "15%",
"defaultInterestRate": "14%",
"fileNotes": "Did you know you can create your own custom fields for this page?\n\nGo to the &amp;amp;quot;Settings&amp;amp;quot; tab &amp;amp;gt; &amp;amp;quot;Custom Fields&amp;amp;quot; &amp;amp;gt; &amp;amp;quot;Add new field&amp;amp;quot;.\n\nOnce you have saved a new custom field, it will appear at the bottom of this page. You can then save information against the system and report on it immediately.",
"businessUse": "Commercial Storage",
"hoursOfAccess": "24 hours",
"originalDeedMadeDate": "1447848000000",
"parties": {
"Landlord": [
  {
"entityId": "12982",
"entityName": "Lisa Simpson"
}
],
"Tenant": [
  {
"entityId": "12987",
"entityName": "Simpson Family Trust"
}
],
"Guarantor": [
  {
"entityId": "12986",
"entityName": "Industry Limited"
}
],
}
}
}
},
"relationships": {
"properties": {
"links": {
"self": "/organisations/696/agreements/55394/relationships/properties/",
"related": "/organisations/696/properties/"
},
"data": [
  {
"type": "properties",
"id": "13213"
},
  {
"type": "properties",
"id": "11070"
}
],
},
"notes": {
"links": {
"self": "/organisations/696/agreements/55394/relationships/notes/",
"related": "/organisations/696/notes/"
},
"data": [
  {
"type": "notes",
"id": 614
}
],
},
"events": {
"links": {
"self": "/organisations/696/agreements/55394/relationships/events/",
"related": "/organisations/696/events/"
},
"data": [
  {
"type": "events",
"id": "118709"
},
  {
"type": "events",
"id": "118710"
},
  {
"type": "events",
"id": "118711"
},
  {
"type": "events",
"id": "118712"
},
  {
"type": "events",
"id": "118713"
},
  {
"type": "events",
"id": "118714"
},
  {
"type": "events",
"id": "118715"
},
  {
"type": "events",
"id": "118716"
},
  {
"type": "events",
"id": "118717"
},
  {
"type": "events",
"id": "118718"
},
  {
"type": "events",
"id": "118719"
},
  {
"type": "events",
"id": "118720"
},
  {
"type": "events",
"id": "118721"
},
  {
"type": "events",
"id": "118722"
},
  {
"type": "events",
"id": "118723"
},
  {
"type": "events",
"id": "118724"
},
  {
"type": "events",
"id": "118725"
},
  {
"type": "events",
"id": "118726"
},
  {
"type": "events",
"id": "118727"
}
],
},
"organisations": {
"links": {
"self": "/organisations/696/agreements/55394/relationships/organisations/",
"related": "/organisations/"
},
"data": [
  {
"type": "organisations",
"id": "696"
}
],
},
"parties": {
"Landlord": {
"links": {
"self": "/organisations/696/agreements/55394/relationships/parties/Landlord/",
"related": "/organisations/696/entities/"
},
"data": [
  {
"type": "entities",
"id": "12982"
}
],
},
"Tenant": {
"links": {
"self": "/organisations/696/agreements/55394/relationships/parties/Tenant/",
"related": "/organisations/696/entities/"
},
"data": [
  {
"type": "entities",
"id": "12987"
}
],
},
"Guarantor": {
"links": {
"self": "/organisations/696/agreements/55394/relationships/parties/Guarantor/",
"related": "/organisations/696/entities/"
},
"data": [
  {
"type": "entities",
"id": "12986"
}
],
}
}
}
},
  {
"type": "agreements",
"id": 55412,
"attributes": {
"insertedDate": 1449199978000,
"updatedDate": 1461044426000,
"knownAs": "Boat Park ",
"legalDescription": "All those 1st, 2nd and 3rd floor offices located in Marine Tower, situated at 1 Bath Street, Dunedin, comprising an area of approximately 800 square metres and outlined in yellow on the attached plan. ",
"internalReferences": [],
"jurisdiction": "New Zealand",
"agreementType": "Lease",
"client": "Landlord",
"currency": "NZD",
"commercial": "Yes",
"agreementMode": "Active",
"commencementDate": "1453550400000",
"expiryDate": "1832155200000",
"totalAnnualRent": "35000.00",
"rent": {
"premises": {
"annual": "25000.00",
"monthly": "2083.33",
"weekly": "480.77"
},
"carparks": {
"annual": "10000.00",
"monthly": "833.33",
"weekly": "192.31"
}
},
"paymentStartDate": "1453550400000",
"paymentPeriod": "Monthly",
"rentPaymentDay": "1st",
"rentPaymentMonth": "January",
"rentDay": "Sunday",
"taxation": "Plus Tax",
"proportionOfOutgoings": "95%",
"defaultInterestRate": "15% per annum",
"businessUse": "Marine Engineering Office",
"publicRiskInsuranceSum": "$5,000",
"hoursOfAccess": "7am - 10pm Monday to Friday",
"airConditioningDays": "7am - 10pm Monday to Friday",
"airConditioningHours": "7am - 10pm Monday to Friday",
"bankGuaranteeSum": "$300,000",
"originalDeedMadeDate": "1449662400000",
"initialState": {
"agreement": {
"agreementId": "55412",
"agreementType": "Lease",
"client": "Landlord",
"currency": "NZD",
"commercial": "Yes",
"agreementMode": "Active",
"commencementDate": "1453550400000",
"expiryDate": "1832155200000",
"totalAnnualRent": "35000.00",
"rent": {
"premises": {
"annual": "25000.00",
"monthly": "2083.33",
"weekly": "480.77"
},
"carparks": {
"annual": "10000.00",
"monthly": "833.33",
"weekly": "192.31"
}
},
"paymentStartDate": "1453550400000",
"paymentPeriod": "Monthly",
"rentPaymentDay": "1st",
"rentPaymentMonth": "January",
"rentDay": "Sunday",
"taxation": "Plus Tax",
"proportionOfOutgoings": "95%",
"defaultInterestRate": "15% per annum",
"businessUse": "Marine Engineering Office",
"publicRiskInsuranceSum": "$5,000",
"hoursOfAccess": "7am - 10pm Monday to Friday",
"airConditioningDays": "7am - 10pm Monday to Friday",
"airConditioningHours": "7am - 10pm Monday to Friday",
"bankGuaranteeSum": "$300,000",
"originalDeedMadeDate": "1449662400000",
"parties": {
"Landlord": [
  {
"entityId": "12998",
"entityName": "Marine Adventures Limited"
}
],
"Tenant": [
  {
"entityId": "13000",
"entityName": "Aqua Family Trust"
}
],
"Guarantor": [
  {
"entityId": "13003",
"entityName": "Wesley Moneybags"
}
],
}
}
}
},
"relationships": {
"properties": {
"links": {
"self": "/organisations/696/agreements/55412/relationships/properties/",
"related": "/organisations/696/properties/"
},
"data": [
  {
"type": "properties",
"id": "11083"
},
  {
"type": "properties",
"id": "11082"
},
  {
"type": "properties",
"id": "3310"
}
],
},
"events": {
"links": {
"self": "/organisations/696/agreements/55412/relationships/events/",
"related": "/organisations/696/events/"
},
"data": [
  {
"type": "events",
"id": "118892"
},
  {
"type": "events",
"id": "118893"
},
  {
"type": "events",
"id": "118894"
},
  {
"type": "events",
"id": "118895"
},
  {
"type": "events",
"id": "118896"
},
  {
"type": "events",
"id": "118897"
},
  {
"type": "events",
"id": "118898"
},
  {
"type": "events",
"id": "118899"
},
  {
"type": "events",
"id": "118900"
},
  {
"type": "events",
"id": "118901"
},
  {
"type": "events",
"id": "118902"
},
  {
"type": "events",
"id": "118903"
},
  {
"type": "events",
"id": "118904"
},
  {
"type": "events",
"id": "118905"
},
  {
"type": "events",
"id": "118906"
},
  {
"type": "events",
"id": "118907"
},
  {
"type": "events",
"id": "118908"
},
  {
"type": "events",
"id": "118909"
},
  {
"type": "events",
"id": "118910"
},
  {
"type": "events",
"id": "118911"
}
],
},
"organisations": {
"links": {
"self": "/organisations/696/agreements/55412/relationships/organisations/",
"related": "/organisations/"
},
"data": [
  {
"type": "organisations",
"id": "696"
}
],
},
"parties": {
"Landlord": {
"links": {
"self": "/organisations/696/agreements/55412/relationships/parties/Landlord/",
"related": "/organisations/696/entities/"
},
"data": [
  {
"type": "entities",
"id": "12998"
}
],
},
"Tenant": {
"links": {
"self": "/organisations/696/agreements/55412/relationships/parties/Tenant/",
"related": "/organisations/696/entities/"
},
"data": [
  {
"type": "entities",
"id": "13000"
}
],
},
"Guarantor": {
"links": {
"self": "/organisations/696/agreements/55412/relationships/parties/Guarantor/",
"related": "/organisations/696/entities/"
},
"data": [
  {
"type": "entities",
"id": "13003"
}
],
}
}
}
},
  {
"type": "agreements",
"id": 55392,
"attributes": {
"insertedDate": 1449199978000,
"updatedDate": 1461226206000,
"knownAs": "Electricity Line Above Street, 12 East Point Road, Sandton",
"legalDescription": "The airspace directly above 12 East Point Road, being the electricity cables marked on plan A. ",
"internalReferences": [
  "15125"
],
"jurisdiction": "New Zealand",
"easementType": "Right to Convey Electricity:Right to Generate Electricity",
"agreementType": "Easement",
"client": "Servient Tenement",
"currency": "USD",
"commercial": "Yes",
"agreementMode": "Active",
"commencementDate": "1410523200000",
"expiryDate": "1694433600000",
"totalAnnualRent": "60000.00",
"rent": {
"premises": {
"annual": "60000.00",
"monthly": "5000.00",
"weekly": "1162.79"
},
"carparks": {
"annual": "0.00",
"monthly": "0.00",
"weekly": "0.00"
}
},
"paymentStartDate": "1410523200000",
"paymentPeriod": "Monthly",
"rentPaymentDay": "1st",
"rentPaymentMonth": "January",
"rentDay": "Sunday",
"taxation": "Plus Tax",
"proportionOfOutgoings": "100%",
"defaultInterestRate": "15%",
"fileNotes": "As well as saving photos, documents, financial and event information, you can save your own custom information to Nomos One. \n\nGo to the &amp;amp;quot;Settings&amp;amp;quot; tab &amp;amp;gt; &amp;amp;quot;Custom Fields&amp;amp;quot; &amp;amp;gt; &amp;amp;quot;Add new field&amp;amp;quot;.\n\nOnce you have saved a new custom field, it will appear at the bottom of this page. You can then save information against the system and report on it immediately. \n",
"businessUse": "offices",
"publicRiskInsuranceSum": "99000",
"hoursOfAccess": "9am to 5pm",
"airConditioningDays": "monday to friday",
"airConditioningHours": "6am to 8pm",
"bankGuaranteeSum": "200000",
"originalDeedMadeDate": "1418385600000",
"initialState": {
"agreement": {
"agreementId": "55392",
"agreementType": "Easement",
"client": "Servient Tenement",
"currency": "USD",
"commercial": "Yes",
"agreementMode": "Active",
"commencementDate": "1410523200000",
"expiryDate": "1694433600000",
"totalAnnualRent": "60000.00",
"rent": {
"premises": {
"annual": "60000.00",
"monthly": "5000.00",
"weekly": "1162.79"
},
"carparks": {
"annual": "0.00",
"monthly": "0.00",
"weekly": "0.00"
}
},
"paymentStartDate": "1410523200000",
"paymentPeriod": "Monthly",
"rentPaymentDay": "1st",
"rentPaymentMonth": "January",
"rentDay": "Sunday",
"taxation": "Plus Tax",
"proportionOfOutgoings": "100%",
"defaultInterestRate": "15%",
"fileNotes": "As well as saving photos, documents, financial and event information, you can save your own custom information to Nomos One. \n\nGo to the &amp;amp;quot;Settings&amp;amp;quot; tab &amp;amp;gt; &amp;amp;quot;Custom Fields&amp;amp;quot; &amp;amp;gt; &amp;amp;quot;Add new field&amp;amp;quot;.\n\nOnce you have saved a new custom field, it will appear at the bottom of this page. You can then save information against the system and report on it immediately. \n",
"businessUse": "offices",
"publicRiskInsuranceSum": "99000",
"hoursOfAccess": "9am to 5pm",
"airConditioningDays": "monday to friday",
"airConditioningHours": "6am to 8pm",
"bankGuaranteeSum": "200000",
"originalDeedMadeDate": "1418385600000",
"parties": {
"Servient Tenement": [
  {
"entityId": "12981",
"entityName": "Homer Simpson"
}
],
"Dominant Tenement": [
  {
"entityId": "12987",
"entityName": "Simpson Family Trust"
}
],
}
}
}
},
"relationships": {
"properties": {
"links": {
"self": "/organisations/696/agreements/55392/relationships/properties/",
"related": "/organisations/696/properties/"
},
"data": [
  {
"type": "properties",
"id": "11072"
},
  {
"type": "properties",
"id": "3301"
}
],
},
"events": {
"links": {
"self": "/organisations/696/agreements/55392/relationships/events/",
"related": "/organisations/696/events/"
},
"data": [
  {
"type": "events",
"id": "118699"
},
  {
"type": "events",
"id": "118700"
},
  {
"type": "events",
"id": "118701"
},
  {
"type": "events",
"id": "118702"
},
  {
"type": "events",
"id": "118703"
},
  {
"type": "events",
"id": "118704"
},
  {
"type": "events",
"id": "118705"
},
  {
"type": "events",
"id": "118706"
},
  {
"type": "events",
"id": "118707"
},
  {
"type": "events",
"id": "118708"
}
],
},
"organisations": {
"links": {
"self": "/organisations/696/agreements/55392/relationships/organisations/",
"related": "/organisations/"
},
"data": [
  {
"type": "organisations",
"id": "696"
}
],
},
"parties": {
"Servient Tenement": {
"links": {
"self": "/organisations/696/agreements/55392/relationships/parties/Servient Tenement",
"related": "/organisations/696/entities/"
},
"data": [
  {
"type": "entities",
"id": "12981"
}
],
},
"Dominant Tenement": {
"links": {
"self": "/organisations/696/agreements/55392/relationships/parties/Dominant Tenement",
"related": "/organisations/696/entities/"
},
"data": [
  {
"type": "entities",
"id": "12987"
}
],
}
}
}
},
  {
"type": "agreements",
"id": 55402,
"attributes": {
"insertedDate": 1449199978000,
"updatedDate": 1461226206000,
"knownAs": "Front Shop, 100 Queen Street, Auckland",
"legalDescription": "The shop at 100 queen street as identified on the district plan 123456. ",
"internalReferences": [
  "66745"
],
"jurisdiction": "New Zealand",
"agreementType": "Lease",
"client": "Landlord",
"currency": "NZD",
"commercial": "Yes",
"agreementMode": "Active",
"commencementDate": "1297512000000",
"expiryDate": "1613044800000",
"totalAnnualRent": "44600.00",
"rent": {
"premises": {
"annual": "42000.00",
"monthly": "3500.00",
"weekly": "813.95"
},
"carparks": {
"annual": "2600.00",
"monthly": "216.67",
"weekly": "50.00"
}
},
"paymentStartDate": "1297512000000",
"paymentPeriod": "Monthly",
"rentPaymentDay": "1st",
"rentPaymentMonth": "January",
"rentDay": "Sunday",
"taxation": "Plus Tax",
"proportionOfOutgoings": "100%",
"defaultInterestRate": "15%",
"fileNotes": "Did you know you can create your own custom fields for this page?\n\nGo to the &amp;amp;quot;Settings&amp;amp;quot; tab &amp;amp;gt; &amp;amp;quot;Custom Fields&amp;amp;quot; &amp;amp;gt; &amp;amp;quot;Add new field&amp;amp;quot;.\n\nOnce you have saved a new custom field, it will appear at the bottom of this page. You can then save information against the system and report on it immediately.",
"businessUse": "Surf Retail Shop",
"hoursOfAccess": "7am to 7pm",
"airConditioningDays": "monday to friday",
"airConditioningHours": "7am to 7pm",
"bankGuaranteeSum": "100000",
"originalDeedMadeDate": "1195041600000",
"initialState": {
"agreement": {
"agreementId": "55402",
"agreementType": "Lease",
"client": "Landlord",
"currency": "NZD",
"commercial": "Yes",
"agreementMode": "Active",
"commencementDate": "1297512000000",
"expiryDate": "1613044800000",
"totalAnnualRent": "44600.00",
"rent": {
"premises": {
"annual": "42000.00",
"monthly": "3500.00",
"weekly": "813.95"
},
"carparks": {
"annual": "2600.00",
"monthly": "216.67",
"weekly": "50.00"
}
},
"paymentStartDate": "1297512000000",
"paymentPeriod": "Monthly",
"rentPaymentDay": "1st",
"rentPaymentMonth": "January",
"rentDay": "Sunday",
"taxation": "Plus Tax",
"proportionOfOutgoings": "100%",
"defaultInterestRate": "15%",
"fileNotes": "Did you know you can create your own custom fields for this page?\n\nGo to the &amp;amp;quot;Settings&amp;amp;quot; tab &amp;amp;gt; &amp;amp;quot;Custom Fields&amp;amp;quot; &amp;amp;gt; &amp;amp;quot;Add new field&amp;amp;quot;.\n\nOnce you have saved a new custom field, it will appear at the bottom of this page. You can then save information against the system and report on it immediately.",
"businessUse": "Surf Retail Shop",
"hoursOfAccess": "7am to 7pm",
"airConditioningDays": "monday to friday",
"airConditioningHours": "7am to 7pm",
"bankGuaranteeSum": "100000",
"originalDeedMadeDate": "1195041600000",
"parties": {
"Landlord": [
  {
"entityId": "12986",
"entityName": "Industry Limited"
}
],
"Tenant": [
  {
"entityId": "12987",
"entityName": "Simpson Family Trust"
}
],
"Guarantor": [
  {
"entityId": "12984",
"entityName": "Maggie Simpson"
}
],
}
}
}
},
"relationships": {
"properties": {
"links": {
"self": "/organisations/696/agreements/55402/relationships/properties/",
"related": "/organisations/696/properties/"
},
"data": [
  {
"type": "properties",
"id": "13215"
},
  {
"type": "properties",
"id": "11077"
},
  {
"type": "properties",
"id": "3305"
}
],
},
"notes": {
"links": {
"self": "/organisations/696/agreements/55402/relationships/notes/",
"related": "/organisations/696/notes/"
},
"data": [
  {
"type": "notes",
"id": 613
},
  {
"type": "notes",
"id": 612
}
],
},
"events": {
"links": {
"self": "/organisations/696/agreements/55402/relationships/events/",
"related": "/organisations/696/events/"
},
"data": [
  {
"type": "events",
"id": "118795"
},
  {
"type": "events",
"id": "118796"
},
  {
"type": "events",
"id": "118797"
},
  {
"type": "events",
"id": "118798"
},
  {
"type": "events",
"id": "118799"
},
  {
"type": "events",
"id": "118800"
},
  {
"type": "events",
"id": "118801"
},
  {
"type": "events",
"id": "118802"
},
  {
"type": "events",
"id": "118803"
},
  {
"type": "events",
"id": "118804"
},
  {
"type": "events",
"id": "118805"
},
  {
"type": "events",
"id": "118806"
},
  {
"type": "events",
"id": "118807"
},
  {
"type": "events",
"id": "118808"
},
  {
"type": "events",
"id": "118809"
},
  {
"type": "events",
"id": "118810"
},
  {
"type": "events",
"id": "118811"
},
  {
"type": "events",
"id": "118812"
},
  {
"type": "events",
"id": "118813"
},
  {
"type": "events",
"id": "118814"
},
  {
"type": "events",
"id": "118815"
},
  {
"type": "events",
"id": "118816"
},
  {
"type": "events",
"id": "118817"
},
  {
"type": "events",
"id": "118818"
},
  {
"type": "events",
"id": "118819"
},
  {
"type": "events",
"id": "118820"
},
  {
"type": "events",
"id": "118821"
},
  {
"type": "events",
"id": "118822"
},
  {
"type": "events",
"id": "118823"
},
  {
"type": "events",
"id": "118824"
}
],
},
"organisations": {
"links": {
"self": "/organisations/696/agreements/55402/relationships/organisations/",
"related": "/organisations/"
},
"data": [
  {
"type": "organisations",
"id": "696"
}
],
},
"parties": {
"Landlord": {
"links": {
"self": "/organisations/696/agreements/55402/relationships/parties/Landlord/",
"related": "/organisations/696/entities/"
},
"data": [
  {
"type": "entities",
"id": "12986"
}
],
},
"Tenant": {
"links": {
"self": "/organisations/696/agreements/55402/relationships/parties/Tenant/",
"related": "/organisations/696/entities/"
},
"data": [
  {
"type": "entities",
"id": "12987"
}
],
},
"Guarantor": {
"links": {
"self": "/organisations/696/agreements/55402/relationships/parties/Guarantor/",
"related": "/organisations/696/entities/"
},
"data": [
  {
"type": "entities",
"id": "12984"
}
],
}
}
}
},
  {
"type": "agreements",
"id": 55388,
"attributes": {
"insertedDate": 1449199978000,
"updatedDate": 1461226206000,
"knownAs": "Ground Floor Office, 123 Wandsworth Road, London",
"legalDescription": "Ground floor offices at 123 Wandsworth Road, down the road from McDonalds. ",
"internalReferences": [
  "15315"
],
"jurisdiction": "New Zealand",
"agreementType": "License",
"client": "Licensor",
"currency": "GBP",
"commercial": "Yes",
"agreementMode": "Active",
"commencementDate": "1447761600000",
"expiryDate": "1542369600000",
"totalAnnualRent": "6030.00",
"rent": {
"premises": {
"annual": "6000.00",
"monthly": "500.00",
"weekly": "116.28"
},
"carparks": {
"annual": "30.00",
"monthly": "2.50",
"weekly": "0.58"
}
},
"paymentStartDate": "1447761600000",
"paymentPeriod": "Annual",
"rentPaymentDay": "1st",
"rentPaymentMonth": "January",
"rentDay": "Sunday",
"taxation": "Plus Tax",
"proportionOfOutgoings": "100%",
"defaultInterestRate": "10%",
"fileNotes": "Did you know you can create your own custom fields for this page?\n\nGo to the &amp;amp;quot;Settings&amp;amp;quot; tab &amp;amp;gt; &amp;amp;quot;Custom Fields&amp;amp;quot; &amp;amp;gt; &amp;amp;quot;Add new field&amp;amp;quot;.\n\nOnce you have saved a new custom field, it will appear at the bottom of this page. You can then save information against the system and report on it immediately.",
"businessUse": "Bakery",
"publicRiskInsuranceSum": "123456",
"hoursOfAccess": "24 hours",
"airConditioningDays": "monday to friday",
"airConditioningHours": "7am to 7pm",
"bankGuaranteeSum": "500000",
"originalDeedMadeDate": "1448020800000",
"initialState": {
"agreement": {
"agreementId": "55388",
"agreementType": "License",
"client": "Licensor",
"currency": "GBP",
"commercial": "Yes",
"agreementMode": "Active",
"commencementDate": "1447761600000",
"expiryDate": "1542369600000",
"totalAnnualRent": "6030.00",
"rent": {
"premises": {
"annual": "6000.00",
"monthly": "500.00",
"weekly": "116.28"
},
"carparks": {
"annual": "30.00",
"monthly": "2.50",
"weekly": "0.58"
}
},
"paymentStartDate": "1447761600000",
"paymentPeriod": "Annual",
"rentPaymentDay": "1st",
"rentPaymentMonth": "January",
"rentDay": "Sunday",
"taxation": "Plus Tax",
"proportionOfOutgoings": "100%",
"defaultInterestRate": "10%",
"fileNotes": "Did you know you can create your own custom fields for this page?\n\nGo to the &amp;amp;quot;Settings&amp;amp;quot; tab &amp;amp;gt; &amp;amp;quot;Custom Fields&amp;amp;quot; &amp;amp;gt; &amp;amp;quot;Add new field&amp;amp;quot;.\n\nOnce you have saved a new custom field, it will appear at the bottom of this page. You can then save information against the system and report on it immediately.",
"businessUse": "Bakery",
"publicRiskInsuranceSum": "123456",
"hoursOfAccess": "24 hours",
"airConditioningDays": "monday to friday",
"airConditioningHours": "7am to 7pm",
"bankGuaranteeSum": "500000",
"originalDeedMadeDate": "1448020800000",
"parties": {
"Licensor": [
  {
"entityId": "12985",
"entityName": "Simpson Limited"
}
],
"Licensee": [
  {
"entityId": "12986",
"entityName": "Industry Limited"
}
],
"Guarantor": [
  {
"entityId": "12983",
"entityName": "Marge Simpson"
}
],
}
}
}
},
"relationships": {
"properties": {
"links": {
"self": "/organisations/696/agreements/55388/relationships/properties/",
"related": "/organisations/696/properties/"
},
"data": [
  {
"type": "properties",
"id": "13212"
},
  {
"type": "properties",
"id": "11071"
},
  {
"type": "properties",
"id": "3300"
}
],
},
"events": {
"links": {
"self": "/organisations/696/agreements/55388/relationships/events/",
"related": "/organisations/696/events/"
},
"data": [
  {
"type": "events",
"id": "118683"
},
  {
"type": "events",
"id": "118684"
},
  {
"type": "events",
"id": "118685"
},
  {
"type": "events",
"id": "118686"
},
  {
"type": "events",
"id": "118687"
}
],
},
"organisations": {
"links": {
"self": "/organisations/696/agreements/55388/relationships/organisations/",
"related": "/organisations/"
},
"data": [
  {
"type": "organisations",
"id": "696"
}
],
},
"parties": {
"Licensor": {
"links": {
"self": "/organisations/696/agreements/55388/relationships/parties/Licensor/",
"related": "/organisations/696/entities/"
},
"data": [
  {
"type": "entities",
"id": "12985"
}
],
},
"Licensee": {
"links": {
"self": "/organisations/696/agreements/55388/relationships/parties/Licensee/",
"related": "/organisations/696/entities/"
},
"data": [
  {
"type": "entities",
"id": "12986"
}
],
},
"Guarantor": {
"links": {
"self": "/organisations/696/agreements/55388/relationships/parties/Guarantor/",
"related": "/organisations/696/entities/"
},
"data": [
  {
"type": "entities",
"id": "12983"
}
],
}
}
}
},
  {
"type": "agreements",
"id": 55400,
"attributes": {
"insertedDate": 1449199978000,
"updatedDate": 1461226206000,
"knownAs": "Ground floor retail shop, 123 Taranaki Street, Wellington",
"legalDescription": "All the area contained in the ground floor retail shop at 123 Taranaki Street, Wellington as per CT3383",
"internalReferences": [
  "asf1551"
],
"jurisdiction": "New Zealand",
"agreementType": "Lease",
"client": "Landlord",
"currency": "NZD",
"commercial": "Yes",
"agreementMode": "Active",
"commencementDate": "1378987200000",
"expiryDate": "1662897600000",
"totalAnnualRent": "54000.00",
"rent": {
"premises": {
"annual": "54000.00",
"monthly": "4500.00",
"weekly": "1046.51"
},
"carparks": {
"annual": "0.00",
"monthly": "0.00",
"weekly": "0.00"
}
},
"paymentStartDate": "1378987200000",
"paymentPeriod": "Monthly",
"rentPaymentDay": "1st",
"rentPaymentMonth": "January",
"rentDay": "Sunday",
"taxation": "Plus Tax",
"proportionOfOutgoings": "100%",
"additionalRent": "2% of income",
"defaultInterestRate": "13%",
"fileNotes": "Did you know you can create your own custom fields for this page?\n\nGo to the &amp;amp;quot;Settings&amp;amp;quot; tab &amp;amp;gt; &amp;amp;quot;Custom Fields&amp;amp;quot; &amp;amp;gt; &amp;amp;quot;Add new field&amp;amp;quot;.\n\nOnce you have saved a new custom field, it will appear at the bottom of this page. You can then save information against the system and report on it immediately. \n\nHow's that for flexible?!",
"businessUse": "Retail shop",
"hoursOfAccess": "7am to 7pm",
"airConditioningDays": "7 days a week",
"airConditioningHours": "7am to 7pm",
"bankGuaranteeSum": "25000",
"originalDeedMadeDate": "1353499200000",
"initialState": {
"agreement": {
"agreementId": "55400",
"agreementType": "Lease",
"client": "Landlord",
"currency": "NZD",
"commercial": "Yes",
"agreementMode": "Active",
"commencementDate": "1378987200000",
"expiryDate": "1662897600000",
"totalAnnualRent": "54000.00",
"rent": {
"premises": {
"annual": "54000.00",
"monthly": "4500.00",
"weekly": "1046.51"
},
"carparks": {
"annual": "0.00",
"monthly": "0.00",
"weekly": "0.00"
}
},
"paymentStartDate": "1378987200000",
"paymentPeriod": "Monthly",
"rentPaymentDay": "1st",
"rentPaymentMonth": "January",
"rentDay": "Sunday",
"taxation": "Plus Tax",
"proportionOfOutgoings": "100%",
"additionalRent": "2% of income",
"defaultInterestRate": "13%",
"fileNotes": "Did you know you can create your own custom fields for this page?\n\nGo to the &amp;amp;quot;Settings&amp;amp;quot; tab &amp;amp;gt; &amp;amp;quot;Custom Fields&amp;amp;quot; &amp;amp;gt; &amp;amp;quot;Add new field&amp;amp;quot;.\n\nOnce you have saved a new custom field, it will appear at the bottom of this page. You can then save information against the system and report on it immediately. \n\nHow's that for flexible?!",
"businessUse": "Retail shop",
"hoursOfAccess": "7am to 7pm",
"airConditioningDays": "7 days a week",
"airConditioningHours": "7am to 7pm",
"bankGuaranteeSum": "25000",
"originalDeedMadeDate": "1353499200000",
"parties": {
"Landlord": [
  {
"entityId": "12986",
"entityName": "Industry Limited"
}
],
"Tenant": [
  {
"entityId": "12983",
"entityName": "Marge Simpson"
}
],
"Guarantor": [
  {
"entityId": "12983",
"entityName": "Marge Simpson"
}
],
}
}
}
},
"relationships": {
"properties": {
"links": {
"self": "/organisations/696/agreements/55400/relationships/properties/",
"related": "/organisations/696/properties/"
},
"data": [
  {
"type": "properties",
"id": "11076"
},
  {
"type": "properties",
"id": "3304"
}
],
},
"events": {
"links": {
"self": "/organisations/696/agreements/55400/relationships/events/",
"related": "/organisations/696/events/"
},
"data": [
  {
"type": "events",
"id": "118781"
},
  {
"type": "events",
"id": "118782"
},
  {
"type": "events",
"id": "118783"
},
  {
"type": "events",
"id": "118784"
},
  {
"type": "events",
"id": "118785"
},
  {
"type": "events",
"id": "118786"
},
  {
"type": "events",
"id": "118787"
},
  {
"type": "events",
"id": "118788"
},
  {
"type": "events",
"id": "118789"
},
  {
"type": "events",
"id": "118790"
},
  {
"type": "events",
"id": "118791"
},
  {
"type": "events",
"id": "118792"
},
  {
"type": "events",
"id": "118793"
},
  {
"type": "events",
"id": "118794"
}
],
},
"organisations": {
"links": {
"self": "/organisations/696/agreements/55400/relationships/organisations/",
"related": "/organisations/"
},
"data": [
  {
"type": "organisations",
"id": "696"
}
],
},
"parties": {
"Landlord": {
"links": {
"self": "/organisations/696/agreements/55400/relationships/parties/Landlord/",
"related": "/organisations/696/entities/"
},
"data": [
  {
"type": "entities",
"id": "12986"
}
],
},
"Tenant": {
"links": {
"self": "/organisations/696/agreements/55400/relationships/parties/Tenant/",
"related": "/organisations/696/entities/"
},
"data": [
  {
"type": "entities",
"id": "12983"
}
],
},
"Guarantor": {
"links": {
"self": "/organisations/696/agreements/55400/relationships/parties/Guarantor/",
"related": "/organisations/696/entities/"
},
"data": [
  {
"type": "entities",
"id": "12983"
}
],
}
}
}
},
  {
"type": "agreements",
"id": 55386,
"attributes": {
"insertedDate": 1449199978000,
"updatedDate": 1461226206000,
"knownAs": "Level 2, 123 London Street, Dunedin",
"legalDescription": "All the property contained at level 2, 123 London Street. ",
"internalReferences": [
  "1325135"
],
"jurisdiction": "New Zealand",
"agreementType": "Lease",
"client": "Landlord",
"currency": "NZD",
"commercial": "Yes",
"agreementMode": "Active",
"commencementDate": "1347451200000",
"expiryDate": "1536667200000",
"totalAnnualRent": "12600.00",
"rent": {
"premises": {
"annual": "10000.00",
"monthly": "833.33",
"weekly": "192.31"
},
"carparks": {
"annual": "2600.00",
"monthly": "216.67",
"weekly": "50.00"
}
},
"paymentStartDate": "1347451200000",
"paymentPeriod": "Monthly",
"rentPaymentDay": "1st",
"rentPaymentMonth": "January",
"rentDay": "Sunday",
"taxation": "Plus Tax",
"proportionOfOutgoings": "50%",
"additionalRent": "3% of gross revenue",
"defaultInterestRate": "5% above floating bank rate at HSBC NZ",
"fileNotes": "Save notes against this agreement here. \n\nWhen saved, you can click on &amp;amp;quot;Reports&amp;amp;quot; tab to quickly report on all your agreements.",
"businessUse": "Bank",
"publicRiskInsuranceSum": "15000",
"hoursOfAccess": "9am to 5pm",
"airConditioningDays": "7 days a week",
"airConditioningHours": "24 hours",
"bankGuaranteeSum": "400000",
"originalDeedMadeDate": "1448366400000",
"initialState": {
"agreement": {
"agreementId": "55386",
"agreementType": "Lease",
"client": "Landlord",
"currency": "NZD",
"commercial": "Yes",
"agreementMode": "Active",
"commencementDate": "1347451200000",
"expiryDate": "1536667200000",
"totalAnnualRent": "12600.00",
"rent": {
"premises": {
"annual": "10000.00",
"monthly": "833.33",
"weekly": "192.31"
},
"carparks": {
"annual": "2600.00",
"monthly": "216.67",
"weekly": "50.00"
}
},
"paymentStartDate": "1347451200000",
"paymentPeriod": "Monthly",
"rentPaymentDay": "1st",
"rentPaymentMonth": "January",
"rentDay": "Sunday",
"taxation": "Plus Tax",
"proportionOfOutgoings": "50%",
"additionalRent": "3% of gross revenue",
"defaultInterestRate": "5% above floating bank rate at HSBC NZ",
"fileNotes": "Save notes against this agreement here. \n\nWhen saved, you can click on &amp;amp;quot;Reports&amp;amp;quot; tab to quickly report on all your agreements.",
"businessUse": "Bank",
"publicRiskInsuranceSum": "15000",
"hoursOfAccess": "9am to 5pm",
"airConditioningDays": "7 days a week",
"airConditioningHours": "24 hours",
"bankGuaranteeSum": "400000",
"originalDeedMadeDate": "1448366400000",
"parties": {
"Landlord": [
  {
"entityId": "12986",
"entityName": "Industry Limited"
}
],
"Tenant": [
  {
"entityId": "12987",
"entityName": "Simpson Family Trust"
}
],
"Guarantor": [
  {
"entityId": "12983",
"entityName": "Marge Simpson"
}
],
}
}
}
},
"relationships": {
"properties": {
"links": {
"self": "/organisations/696/agreements/55386/relationships/properties/",
"related": "/organisations/696/properties/"
},
"data": [
  {
"type": "properties",
"id": "13211"
},
  {
"type": "properties",
"id": "11069"
}
],
},
"notes": {
"links": {
"self": "/organisations/696/agreements/55386/relationships/notes/",
"related": "/organisations/696/notes/"
},
"data": [
  {
"type": "notes",
"id": 627
},
  {
"type": "notes",
"id": 625
},
  {
"type": "notes",
"id": 623
},
  {
"type": "notes",
"id": 611
}
],
},
"events": {
"links": {
"self": "/organisations/696/agreements/55386/relationships/events/",
"related": "/organisations/696/events/"
},
"data": [
  {
"type": "events",
"id": "118677"
},
  {
"type": "events",
"id": "118678"
},
  {
"type": "events",
"id": "118679"
},
  {
"type": "events",
"id": "118680"
},
  {
"type": "events",
"id": "118681"
},
  {
"type": "events",
"id": "118682"
}
],
},
"organisations": {
"links": {
"self": "/organisations/696/agreements/55386/relationships/organisations/",
"related": "/organisations/"
},
"data": [
  {
"type": "organisations",
"id": "696"
}
],
},
"parties": {
"Landlord": {
"links": {
"self": "/organisations/696/agreements/55386/relationships/parties/Landlord/",
"related": "/organisations/696/entities/"
},
"data": [
  {
"type": "entities",
"id": "12986"
}
],
},
"Tenant": {
"links": {
"self": "/organisations/696/agreements/55386/relationships/parties/Tenant/",
"related": "/organisations/696/entities/"
},
"data": [
  {
"type": "entities",
"id": "12987"
}
],
},
"Guarantor": {
"links": {
"self": "/organisations/696/agreements/55386/relationships/parties/Guarantor/",
"related": "/organisations/696/entities/"
},
"data": [
  {
"type": "entities",
"id": "12983"
}
],
}
}
}
},
  {
"type": "agreements",
"id": 55396,
"attributes": {
"insertedDate": 1449199978000,
"updatedDate": 1461226206000,
"knownAs": "Office 3, Level 5, 45 Bondi Road, Bondi Junction",
"legalDescription": "The offices located at level 5 in the tallest building in the street. ",
"internalReferences": [
  "234512"
],
"jurisdiction": "New Zealand",
"agreementType": "Sublease",
"client": "SubLessor",
"currency": "AUD",
"commercial": "Yes",
"agreementMode": "Active",
"commencementDate": "1450008000000",
"expiryDate": "1923307200000",
"totalAnnualRent": "14600.00",
"rent": {
"premises": {
"annual": "12000.00",
"monthly": "1000.00",
"weekly": "232.56"
},
"carparks": {
"annual": "2600.00",
"monthly": "216.67",
"weekly": "50.00"
}
},
"paymentStartDate": "1450008000000",
"paymentPeriod": "Monthly",
"rentPaymentDay": "1st",
"rentPaymentMonth": "January",
"rentDay": "Sunday",
"taxation": "Plus Tax",
"proportionOfOutgoings": "5%",
"defaultInterestRate": "11%",
"fileNotes": "Did you know you can create your own custom fields for this page?\n\nGo to the &amp;amp;quot;Settings&amp;amp;quot; tab &amp;amp;gt; &amp;amp;quot;Custom Fields&amp;amp;quot; &amp;amp;gt; &amp;amp;quot;Add new field&amp;amp;quot;.\n\nOnce you have saved a new custom field, it will appear at the bottom of this page. You can then save information against the system and report on it immediately.",
"businessUse": "Barber",
"hoursOfAccess": "8am to 8pm",
"originalDeedMadeDate": "1447848000000",
"initialState": {
"agreement": {
"agreementId": "55396",
"agreementType": "Sublease",
"client": "SubLessor",
"currency": "AUD",
"commercial": "Yes",
"agreementMode": "Active",
"commencementDate": "1450008000000",
"expiryDate": "1923307200000",
"totalAnnualRent": "14600.00",
"rent": {
"premises": {
"annual": "12000.00",
"monthly": "1000.00",
"weekly": "232.56"
},
"carparks": {
"annual": "2600.00",
"monthly": "216.67",
"weekly": "50.00"
}
},
"paymentStartDate": "1450008000000",
"paymentPeriod": "Monthly",
"rentPaymentDay": "1st",
"rentPaymentMonth": "January",
"rentDay": "Sunday",
"taxation": "Plus Tax",
"proportionOfOutgoings": "5%",
"defaultInterestRate": "11%",
"fileNotes": "Did you know you can create your own custom fields for this page?\n\nGo to the &amp;amp;quot;Settings&amp;amp;quot; tab &amp;amp;gt; &amp;amp;quot;Custom Fields&amp;amp;quot; &amp;amp;gt; &amp;amp;quot;Add new field&amp;amp;quot;.\n\nOnce you have saved a new custom field, it will appear at the bottom of this page. You can then save information against the system and report on it immediately.",
"businessUse": "Barber",
"hoursOfAccess": "8am to 8pm",
"originalDeedMadeDate": "1447848000000",
"parties": {
"Head Lessor": [
  {
"entityId": "12987",
"entityName": "Simpson Family Trust"
}
],
"Sub Lessor": [
  {
"entityId": "12985",
"entityName": "Simpson Limited"
}
],
"Sub Lessee": [
  {
"entityId": "12984",
"entityName": "Maggie Simpson"
}
],
"Guarantor": [
  {
"entityId": "12981",
"entityName": "Homer Simpson"
}
],
}
}
}
},
"relationships": {
"properties": {
"links": {
"self": "/organisations/696/agreements/55396/relationships/properties/",
"related": "/organisations/696/properties/"
},
"data": [
  {
"type": "properties",
"id": "13214"
},
  {
"type": "properties",
"id": "11073"
},
  {
"type": "properties",
"id": "3302"
}
],
},
"notes": {
"links": {
"self": "/organisations/696/agreements/55396/relationships/notes/",
"related": "/organisations/696/notes/"
},
"data": [
  {
"type": "notes",
"id": 610
},
  {
"type": "notes",
"id": 609
}
],
},
"events": {
"links": {
"self": "/organisations/696/agreements/55396/relationships/events/",
"related": "/organisations/696/events/"
},
"data": [
  {
"type": "events",
"id": "118728"
},
  {
"type": "events",
"id": "118729"
},
  {
"type": "events",
"id": "118730"
},
  {
"type": "events",
"id": "118731"
},
  {
"type": "events",
"id": "118732"
},
  {
"type": "events",
"id": "118733"
},
  {
"type": "events",
"id": "118734"
},
  {
"type": "events",
"id": "118735"
},
  {
"type": "events",
"id": "118736"
},
  {
"type": "events",
"id": "118737"
},
  {
"type": "events",
"id": "118738"
},
  {
"type": "events",
"id": "118739"
},
  {
"type": "events",
"id": "118740"
},
  {
"type": "events",
"id": "118741"
},
  {
"type": "events",
"id": "118742"
},
  {
"type": "events",
"id": "118743"
},
  {
"type": "events",
"id": "118744"
}
],
},
"organisations": {
"links": {
"self": "/organisations/696/agreements/55396/relationships/organisations/",
"related": "/organisations/"
},
"data": [
  {
"type": "organisations",
"id": "696"
}
],
},
"parties": {
"Head Lessor": {
"links": {
"self": "/organisations/696/agreements/55396/relationships/parties/Head Lessor/",
"related": "/organisations/696/entities/"
},
"data": [
  {
"type": "entities",
"id": "12987"
}
],
},
"Sub Lessor": {
"links": {
"self": "/organisations/696/agreements/55396/relationships/parties/Sub Lessor/",
"related": "/organisations/696/entities/"
},
"data": [
  {
"type": "entities",
"id": "12985"
}
],
},
"Sub Lessee": {
"links": {
"self": "/organisations/696/agreements/55396/relationships/parties/Sub Lessee/",
"related": "/organisations/696/entities/"
},
"data": [
  {
"type": "entities",
"id": "12984"
}
],
},
"Guarantor": {
"links": {
"self": "/organisations/696/agreements/55396/relationships/parties/Guarantor/",
"related": "/organisations/696/entities/"
},
"data": [
  {
"type": "entities",
"id": "12981"
}
],
}
}
}
},
  {
"type": "agreements",
"id": 55408,
"attributes": {
"insertedDate": 1449199978000,
"updatedDate": 1461044426000,
"knownAs": "Southland",
"legalDescription": "All of those premises that are on the Ground Floor and outlined in green on the attached plan. ",
"internalReferences": [
  "Ref123"
],
"jurisdiction": "New Zealand",
"agreementType": "Franchise",
"client": "Franchisor",
"currency": "NZD",
"commercial": "Yes",
"agreementMode": "Active",
"commencementDate": "1431000000000",
"expiryDate": "1904299200000",
"totalAnnualRent": "25500.00",
"rent": {
"premises": {
"annual": "25000.00",
"monthly": "2083.33",
"weekly": "480.77"
},
"carparks": {
"annual": "500.00",
"monthly": "41.67",
"weekly": "9.62"
}
},
"paymentStartDate": "1431000000000",
"paymentPeriod": "Monthly",
"rentPaymentDay": "1st",
"rentPaymentMonth": "January",
"rentDay": "Sunday",
"taxation": "Plus Tax",
"proportionOfOutgoings": "100%",
"defaultInterestRate": "15% per annum",
"fileNotes": "Did you know that there is 90% duplication of property documentation? This can be significantly reduced, even eliminated if you use Nomos One.",
"businessUse": "Offices",
"originalDeedMadeDate": "1451476800000",
"initialState": {
"agreement": {
"agreementId": "55408",
"agreementType": "Franchise",
"client": "Franchisor",
"currency": "NZD",
"commercial": "Yes",
"agreementMode": "Active",
"commencementDate": "1431000000000",
"expiryDate": "1904299200000",
"totalAnnualRent": "25500.00",
"rent": {
"premises": {
"annual": "25000.00",
"monthly": "2083.33",
"weekly": "480.77"
},
"carparks": {
"annual": "500.00",
"monthly": "41.67",
"weekly": "9.62"
}
},
"paymentStartDate": "1431000000000",
"paymentPeriod": "Monthly",
"rentPaymentDay": "1st",
"rentPaymentMonth": "January",
"rentDay": "Sunday",
"taxation": "Plus Tax",
"proportionOfOutgoings": "100%",
"defaultInterestRate": "15% per annum",
"fileNotes": "Did you know that there is 90% duplication of property documentation? This can be significantly reduced, even eliminated if you use Nomos One.",
"businessUse": "Offices",
"originalDeedMadeDate": "1451476800000",
"parties": {
"Franchisee": [
  {
"entityId": "12988",
"entityName": "Hogwarts School of Witchcraft and Wizary"
}
],
"Guarantor": [
  {
"entityId": "12992",
"entityName": "Hagrid"
}
],
"Franchisor": [
  {
"entityId": "12987",
"entityName": "Simpson Family Trust"
}
],
}
}
}
},
"relationships": {
"properties": {
"links": {
"self": "/organisations/696/agreements/55408/relationships/properties/",
"related": "/organisations/696/properties/"
},
"data": [
  {
"type": "properties",
"id": "11080"
},
  {
"type": "properties",
"id": "11079"
},
  {
"type": "properties",
"id": "3308"
}
],
},
"notes": {
"links": {
"self": "/organisations/696/agreements/55408/relationships/notes/",
"related": "/organisations/696/notes/"
},
"data": [
  {
"type": "notes",
"id": 621
},
  {
"type": "notes",
"id": 620
},
  {
"type": "notes",
"id": 616
}
],
},
"events": {
"links": {
"self": "/organisations/696/agreements/55408/relationships/events/",
"related": "/organisations/696/events/"
},
"data": [
  {
"type": "events",
"id": "118850"
},
  {
"type": "events",
"id": "118851"
},
  {
"type": "events",
"id": "118852"
},
  {
"type": "events",
"id": "118853"
},
  {
"type": "events",
"id": "118854"
},
  {
"type": "events",
"id": "118855"
},
  {
"type": "events",
"id": "118856"
},
  {
"type": "events",
"id": "118857"
},
  {
"type": "events",
"id": "118858"
},
  {
"type": "events",
"id": "118859"
},
  {
"type": "events",
"id": "118860"
},
  {
"type": "events",
"id": "118861"
},
  {
"type": "events",
"id": "118862"
},
  {
"type": "events",
"id": "118863"
},
  {
"type": "events",
"id": "118864"
},
  {
"type": "events",
"id": "118865"
},
  {
"type": "events",
"id": "118866"
},
  {
"type": "events",
"id": "118867"
},
  {
"type": "events",
"id": "118868"
},
  {
"type": "events",
"id": "118869"
},
  {
"type": "events",
"id": "118870"
},
  {
"type": "events",
"id": "118871"
},
  {
"type": "events",
"id": "118872"
},
  {
"type": "events",
"id": "118873"
},
  {
"type": "events",
"id": "118874"
}
],
},
"organisations": {
"links": {
"self": "/organisations/696/agreements/55408/relationships/organisations/",
"related": "/organisations/"
},
"data": [
  {
"type": "organisations",
"id": "696"
}
],
},
"parties": {
"Franchisee": {
"links": {
"self": "/organisations/696/agreements/55408/relationships/parties/Franchisee",
"related": "/organisations/696/entities/"
},
"data": [
  {
"type": "entities",
"id": "12988"
}
],
},
"Guarantor": {
"links": {
"self": "/organisations/696/agreements/55408/relationships/parties/Guarantor/",
"related": "/organisations/696/entities/"
},
"data": [
  {
"type": "entities",
"id": "12992"
}
],
},
"Franchisor": {
"links": {
"self": "/organisations/696/agreements/55408/relationships/parties/Franchisor",
"related": "/organisations/696/entities/"
},
"data": [
  {
"type": "entities",
"id": "12987"
}
],
}
}
}
},
  {
"type": "agreements",
"id": 55390,
"attributes": {
"insertedDate": 1449199978000,
"updatedDate": 1449199982000,
"knownAs": "Sub Warehouse",
"internalReferences": [
  "125125"
],
"jurisdiction": "New Zealand",
"agreementType": "Sublease",
"client": "SubLessor",
"currency": "USD",
"commercial": "Yes",
"agreementMode": "Active",
"commencementDate": "1447329600000",
"expiryDate": "1731326400000",
"totalAnnualRent": "50000.00",
"rent": {
"premises": {
"annual": "50000.00",
"monthly": "4166.67",
"weekly": "961.54"
},
"carparks": {
"annual": "0.00",
"monthly": "0.00",
"weekly": "0.00"
}
},
"paymentStartDate": "1447329600000",
"paymentPeriod": "Monthly",
"rentPaymentDay": "1st",
"rentPaymentMonth": "January",
"rentDay": "Sunday",
"taxation": "Plus Tax",
"proportionOfOutgoings": "100%",
"defaultInterestRate": "20%",
"fileNotes": "Save important notes about this agreement for quick reference.",
"businessUse": "Offices",
"publicRiskInsuranceSum": "50000",
"hoursOfAccess": "24 hours",
"airConditioningDays": "monday to friday",
"airConditioningHours": "7am to 7pm",
"bankGuaranteeSum": "56000",
"originalDeedMadeDate": "1447761600000",
"initialState": {
"agreement": {
"agreementId": "55390",
"agreementType": "Sublease",
"client": "SubLessor",
"currency": "USD",
"commercial": "Yes",
"agreementMode": "Active",
"commencementDate": "1447329600000",
"expiryDate": "1731326400000",
"totalAnnualRent": "50000.00",
"rent": {
"premises": {
"annual": "50000.00",
"monthly": "4166.67",
"weekly": "961.54"
},
"carparks": {
"annual": "0.00",
"monthly": "0.00",
"weekly": "0.00"
}
},
"paymentStartDate": "1447329600000",
"paymentPeriod": "Monthly",
"rentPaymentDay": "1st",
"rentPaymentMonth": "January",
"rentDay": "Sunday",
"taxation": "Plus Tax",
"proportionOfOutgoings": "100%",
"defaultInterestRate": "20%",
"fileNotes": "Save important notes about this agreement for quick reference.",
"businessUse": "Offices",
"publicRiskInsuranceSum": "50000",
"hoursOfAccess": "24 hours",
"airConditioningDays": "monday to friday",
"airConditioningHours": "7am to 7pm",
"bankGuaranteeSum": "56000",
"originalDeedMadeDate": "1447761600000",
"parties": {
"Head Lessor": [
  {
"entityId": "12981",
"entityName": "Homer Simpson"
}
],
"Sub Lessor": [
  {
"entityId": "12983",
"entityName": "Marge Simpson"
}
],
"Sub Lessee": [
  {
"entityId": "12987",
"entityName": "Simpson Family Trust"
}
],
"Guarantor": [
  {
"entityId": "12982",
"entityName": "Lisa Simpson"
}
],
}
}
}
},
"relationships": {
"events": {
"links": {
"self": "/organisations/696/agreements/55390/relationships/events/",
"related": "/organisations/696/events/"
},
"data": [
  {
"type": "events",
"id": "118688"
},
  {
"type": "events",
"id": "118689"
},
  {
"type": "events",
"id": "118690"
},
  {
"type": "events",
"id": "118691"
},
  {
"type": "events",
"id": "118692"
},
  {
"type": "events",
"id": "118693"
},
  {
"type": "events",
"id": "118694"
},
  {
"type": "events",
"id": "118695"
},
  {
"type": "events",
"id": "118696"
},
  {
"type": "events",
"id": "118697"
},
  {
"type": "events",
"id": "118698"
}
],
},
"organisations": {
"links": {
"self": "/organisations/696/agreements/55390/relationships/organisations/",
"related": "/organisations/"
},
"data": [
  {
"type": "organisations",
"id": "696"
}
],
},
"parties": {
"Head Lessor": {
"links": {
"self": "/organisations/696/agreements/55390/relationships/parties/Head Lessor/",
"related": "/organisations/696/entities/"
},
"data": [
  {
"type": "entities",
"id": "12981"
}
],
},
"Sub Lessor": {
"links": {
"self": "/organisations/696/agreements/55390/relationships/parties/Sub Lessor/",
"related": "/organisations/696/entities/"
},
"data": [
  {
"type": "entities",
"id": "12983"
}
],
},
"Sub Lessee": {
"links": {
"self": "/organisations/696/agreements/55390/relationships/parties/Sub Lessee/",
"related": "/organisations/696/entities/"
},
"data": [
  {
"type": "entities",
"id": "12987"
}
],
},
"Guarantor": {
"links": {
"self": "/organisations/696/agreements/55390/relationships/parties/Guarantor/",
"related": "/organisations/696/entities/"
},
"data": [
  {
"type": "entities",
"id": "12982"
}
],
}
}
}
},
  {
"type": "agreements",
"id": 55384,
"attributes": {
"insertedDate": 1449199978000,
"updatedDate": 1461044426000,
"knownAs": "Trump Tower",
"legalDescription": "All of the area contained on level 1 of Trump Tower at 123 London Street.",
"internalReferences": [
  "my reference 123"
],
"jurisdiction": "New Zealand",
"agreementType": "Lease",
"client": "Tenant:Guarantor",
"currency": "NZD",
"commercial": "Yes",
"agreementMode": "Active",
"commencementDate": "1450008000000",
"expiryDate": "1923307200000",
"totalAnnualRent": "20600.00",
"rent": {
"premises": {
"annual": "18000.00",
"monthly": "1500.00",
"weekly": "348.84"
},
"carparks": {
"annual": "2600.00",
"monthly": "216.67",
"weekly": "50.00"
}
},
"paymentStartDate": "1450008000000",
"paymentPeriod": "Monthly",
"rentPaymentDay": "1st",
"rentPaymentMonth": "January",
"rentDay": "Sunday",
"taxation": "Plus Tax",
"proportionOfOutgoings": "50%",
"additionalRent": "n/a",
"defaultInterestRate": "15%",
"fileNotes": "Did you know you can create your own custom fields for this page?\n\nGo to the &amp;amp;quot;Settings&amp;amp;quot; tab &amp;amp;gt; &amp;amp;quot;Custom Fields&amp;amp;quot; &amp;amp;gt; &amp;amp;quot;Add new field&amp;amp;quot;.\n\nOnce you have saved a new custom field, it will appear at the bottom of this page. You can then save information against the system and report on it immediately.",
"businessUse": "Bakery",
"publicRiskInsuranceSum": "100000",
"hoursOfAccess": "7am to 7pm",
"airConditioningDays": "7 days a week",
"airConditioningHours": "24 hours",
"bankGuaranteeSum": "300000",
"initialState": {
"agreement": {
"agreementId": "55384",
"agreementType": "Lease",
"client": "Tenant:Guarantor",
"currency": "NZD",
"commercial": "Yes",
"agreementMode": "Active",
"commencementDate": "1450008000000",
"expiryDate": "1923307200000",
"totalAnnualRent": "20600.00",
"rent": {
"premises": {
"annual": "18000.00",
"monthly": "1500.00",
"weekly": "348.84"
},
"carparks": {
"annual": "2600.00",
"monthly": "216.67",
"weekly": "50.00"
}
},
"paymentStartDate": "1450008000000",
"paymentPeriod": "Monthly",
"rentPaymentDay": "1st",
"rentPaymentMonth": "January",
"rentDay": "Sunday",
"taxation": "Plus Tax",
"proportionOfOutgoings": "50%",
"additionalRent": "n/a",
"defaultInterestRate": "15%",
"fileNotes": "Did you know you can create your own custom fields for this page?\n\nGo to the &amp;amp;quot;Settings&amp;amp;quot; tab &amp;amp;gt; &amp;amp;quot;Custom Fields&amp;amp;quot; &amp;amp;gt; &amp;amp;quot;Add new field&amp;amp;quot;.\n\nOnce you have saved a new custom field, it will appear at the bottom of this page. You can then save information against the system and report on it immediately.",
"businessUse": "Bakery",
"publicRiskInsuranceSum": "100000",
"hoursOfAccess": "7am to 7pm",
"airConditioningDays": "7 days a week",
"airConditioningHours": "24 hours",
"bankGuaranteeSum": "300000",
"parties": {
"Tenant": [
  {
"entityId": "12986",
"entityName": "Industry Limited"
}
],
"Landlord": [
  {
"entityId": "12987",
"entityName": "Simpson Family Trust"
}
],
"Guarantor": [
  {
"entityId": "12982",
"entityName": "Lisa Simpson"
}
],
}
}
}
},
"relationships": {
"properties": {
"links": {
"self": "/organisations/696/agreements/55384/relationships/properties/",
"related": "/organisations/696/properties/"
},
"data": [
  {
"type": "properties",
"id": "11068"
},
  {
"type": "properties",
"id": "11067"
}
],
},
"notes": {
"links": {
"self": "/organisations/696/agreements/55384/relationships/notes/",
"related": "/organisations/696/notes/"
},
"data": [
  {
"type": "notes",
"id": 626
},
  {
"type": "notes",
"id": 624
},
  {
"type": "notes",
"id": 622
},
  {
"type": "notes",
"id": 608
}
],
},
"events": {
"links": {
"self": "/organisations/696/agreements/55384/relationships/events/",
"related": "/organisations/696/events/"
},
"data": [
  {
"type": "events",
"id": "118644"
},
  {
"type": "events",
"id": "118645"
},
  {
"type": "events",
"id": "118646"
},
  {
"type": "events",
"id": "118647"
},
  {
"type": "events",
"id": "118648"
},
  {
"type": "events",
"id": "118649"
},
  {
"type": "events",
"id": "118650"
},
  {
"type": "events",
"id": "118651"
},
  {
"type": "events",
"id": "118652"
},
  {
"type": "events",
"id": "118653"
},
  {
"type": "events",
"id": "118654"
},
  {
"type": "events",
"id": "118655"
},
  {
"type": "events",
"id": "118656"
},
  {
"type": "events",
"id": "118657"
},
  {
"type": "events",
"id": "118658"
},
  {
"type": "events",
"id": "118659"
},
  {
"type": "events",
"id": "118660"
},
  {
"type": "events",
"id": "118661"
},
  {
"type": "events",
"id": "118662"
},
  {
"type": "events",
"id": "118663"
},
  {
"type": "events",
"id": "118664"
},
  {
"type": "events",
"id": "118665"
},
  {
"type": "events",
"id": "118666"
},
  {
"type": "events",
"id": "118667"
},
  {
"type": "events",
"id": "118668"
},
  {
"type": "events",
"id": "118669"
},
  {
"type": "events",
"id": "118670"
},
  {
"type": "events",
"id": "118671"
},
  {
"type": "events",
"id": "118672"
},
  {
"type": "events",
"id": "118673"
},
  {
"type": "events",
"id": "118674"
},
  {
"type": "events",
"id": "118675"
},
  {
"type": "events",
"id": "118676"
}
],
},
"organisations": {
"links": {
"self": "/organisations/696/agreements/55384/relationships/organisations/",
"related": "/organisations/"
},
"data": [
  {
"type": "organisations",
"id": "696"
}
],
},
"parties": {
"Tenant": {
"links": {
"self": "/organisations/696/agreements/55384/relationships/parties/Tenant/",
"related": "/organisations/696/entities/"
},
"data": [
  {
"type": "entities",
"id": "12986"
}
],
},
"Landlord": {
"links": {
"self": "/organisations/696/agreements/55384/relationships/parties/Landlord/",
"related": "/organisations/696/entities/"
},
"data": [
  {
"type": "entities",
"id": "12987"
}
],
},
"Guarantor": {
"links": {
"self": "/organisations/696/agreements/55384/relationships/parties/Guarantor/",
"related": "/organisations/696/entities/"
},
"data": [
  {
"type": "entities",
"id": "12982"
}
],
}
}
}
},
  {
"type": "agreements",
"id": 55406,
"attributes": {
"insertedDate": 1449199978000,
"updatedDate": 1461044426000,
"knownAs": "Trump Tower Plaza",
"legalDescription": "All of the area contained at the premises 123 Eglington Road, Dunedin.",
"internalReferences": [
  "247247gfs"
],
"jurisdiction": "New Zealand",
"agreementType": "Sublease",
"client": "SubLessor",
"currency": "NZD",
"commercial": "Yes",
"agreementMode": "Active",
"commencementDate": "1450008000000",
"expiryDate": "1923307200000",
"totalAnnualRent": "46000.00",
"rent": {
"premises": {
"annual": "6000.00",
"monthly": "500.00",
"weekly": "116.28"
},
"carparks": {
"annual": "40000.00",
"monthly": "3333.33",
"weekly": "769.23"
}
},
"paymentStartDate": "1450008000000",
"paymentPeriod": "Quarterly",
"rentPaymentDay": "1st",
"rentPaymentMonth": "January",
"rentDay": "Sunday",
"taxation": "Plus Tax",
"proportionOfOutgoings": "15%",
"additionalRent": "2% of gross income",
"defaultInterestRate": "15%",
"fileNotes": "here is a note about some important stuff.",
"businessUse": "offices",
"publicRiskInsuranceSum": "20000",
"hoursOfAccess": "24 hours",
"airConditioningDays": "monday to friday",
"airConditioningHours": "9am to 9pm",
"bankGuaranteeSum": "$100,000",
"originalDeedMadeDate": "1453636800000",
"initialState": {
"agreement": {
"agreementId": "55406",
"agreementType": "Sublease",
"client": "SubLessor",
"currency": "NZD",
"commercial": "Yes",
"agreementMode": "Active",
"commencementDate": "1450008000000",
"expiryDate": "1923307200000",
"totalAnnualRent": "46000.00",
"rent": {
"premises": {
"annual": "6000.00",
"monthly": "500.00",
"weekly": "116.28"
},
"carparks": {
"annual": "40000.00",
"monthly": "3333.33",
"weekly": "769.23"
}
},
"paymentStartDate": "1450008000000",
"paymentPeriod": "Quarterly",
"rentPaymentDay": "1st",
"rentPaymentMonth": "January",
"rentDay": "Sunday",
"taxation": "Plus Tax",
"proportionOfOutgoings": "15%",
"additionalRent": "2% of gross income",
"defaultInterestRate": "15%",
"fileNotes": "here is a note about some important stuff.",
"businessUse": "offices",
"publicRiskInsuranceSum": "20000",
"hoursOfAccess": "24 hours",
"airConditioningDays": "monday to friday",
"airConditioningHours": "9am to 9pm",
"bankGuaranteeSum": "$100,000",
"originalDeedMadeDate": "1453636800000",
"parties": {
"Head Lessor": [
  {
"entityId": "12986",
"entityName": "Industry Limited"
}
],
"Sub Lessor": [
  {
"entityId": "12987",
"entityName": "Simpson Family Trust"
}
],
"Sub Lessee": [
  {
"entityId": "12982",
"entityName": "Lisa Simpson"
}
],
"Guarantor": [
  {
"entityId": "12985",
"entityName": "Simpson Limited"
}
],
}
}
}
},
"relationships": {
"properties": {
"links": {
"self": "/organisations/696/agreements/55406/relationships/properties/",
"related": "/organisations/696/properties/"
},
"data": [
  {
"type": "properties",
"id": "13216"
},
  {
"type": "properties",
"id": "11078"
},
  {
"type": "properties",
"id": "3307"
}
],
},
"notes": {
"links": {
"self": "/organisations/696/agreements/55406/relationships/notes/",
"related": "/organisations/696/notes/"
},
"data": [
  {
"type": "notes",
"id": 615
}
],
},
"events": {
"links": {
"self": "/organisations/696/agreements/55406/relationships/events/",
"related": "/organisations/696/events/"
},
"data": [
  {
"type": "events",
"id": "118826"
},
  {
"type": "events",
"id": "118827"
},
  {
"type": "events",
"id": "118828"
},
  {
"type": "events",
"id": "118829"
},
  {
"type": "events",
"id": "118830"
},
  {
"type": "events",
"id": "118831"
},
  {
"type": "events",
"id": "118832"
},
  {
"type": "events",
"id": "118833"
},
  {
"type": "events",
"id": "118834"
},
  {
"type": "events",
"id": "118835"
},
  {
"type": "events",
"id": "118836"
},
  {
"type": "events",
"id": "118837"
},
  {
"type": "events",
"id": "118838"
},
  {
"type": "events",
"id": "118839"
},
  {
"type": "events",
"id": "118840"
},
  {
"type": "events",
"id": "118841"
},
  {
"type": "events",
"id": "118842"
},
  {
"type": "events",
"id": "118843"
},
  {
"type": "events",
"id": "118844"
},
  {
"type": "events",
"id": "118845"
},
  {
"type": "events",
"id": "118846"
},
  {
"type": "events",
"id": "118847"
},
  {
"type": "events",
"id": "118848"
},
  {
"type": "events",
"id": "118849"
}
],
},
"organisations": {
"links": {
"self": "/organisations/696/agreements/55406/relationships/organisations/",
"related": "/organisations/"
},
"data": [
  {
"type": "organisations",
"id": "696"
}
],
},
"parties": {
"Head Lessor": {
"links": {
"self": "/organisations/696/agreements/55406/relationships/parties/Head Lessor/",
"related": "/organisations/696/entities/"
},
"data": [
  {
"type": "entities",
"id": "12986"
}
],
},
"Sub Lessor": {
"links": {
"self": "/organisations/696/agreements/55406/relationships/parties/Sub Lessor/",
"related": "/organisations/696/entities/"
},
"data": [
  {
"type": "entities",
"id": "12987"
}
],
},
"Sub Lessee": {
"links": {
"self": "/organisations/696/agreements/55406/relationships/parties/Sub Lessee/",
"related": "/organisations/696/entities/"
},
"data": [
  {
"type": "entities",
"id": "12982"
}
],
},
"Guarantor": {
"links": {
"self": "/organisations/696/agreements/55406/relationships/parties/Guarantor/",
"related": "/organisations/696/entities/"
},
"data": [
  {
"type": "entities",
"id": "12985"
}
],
}
}
}
},
  {
"type": "agreements",
"id": 55404,
"attributes": {
"insertedDate": 1449199978000,
"updatedDate": 1461226206000,
"knownAs": "Undefined Property",
"internalReferences": [],
"jurisdiction": "New Zealand",
"agreementType": "Lease",
"client": "Landlord",
"currency": "USD",
"commercial": "Yes",
"agreementMode": "Inactive",
"commencementDate": "1452600000000",
"totalAnnualRent": "0.00",
"rent": {
"premises": {
"annual": "0.00",
"monthly": "0.00",
"weekly": "0.00"
},
"carparks": {
"annual": "0.00",
"monthly": "0.00",
"weekly": "0.00"
}
},
"paymentPeriod": "Monthly",
"rentPaymentDay": "1st",
"rentPaymentMonth": "January",
"rentDay": "Sunday",
"taxation": "Plus Tax",
"initialState": {
"agreement": {
"agreementId": "55404",
"agreementType": "Lease",
"client": "Landlord",
"currency": "USD",
"commercial": "Yes",
"agreementMode": "Inactive",
"commencementDate": "1452600000000",
"totalAnnualRent": "0.00",
"rent": {
"premises": {
"annual": "0.00",
"monthly": "0.00",
"weekly": "0.00"
},
"carparks": {
"annual": "0.00",
"monthly": "0.00",
"weekly": "0.00"
}
},
"paymentPeriod": "Monthly",
"rentPaymentDay": "1st",
"rentPaymentMonth": "January",
"rentDay": "Sunday",
"taxation": "Plus Tax",
"parties": {}
}
}
},
"relationships": {
"properties": {
"links": {
"self": "/organisations/696/agreements/55404/relationships/properties/",
"related": "/organisations/696/properties/"
},
"data": [
  {
"type": "properties",
"id": "3306"
}
],
},
"events": {
"links": {
"self": "/organisations/696/agreements/55404/relationships/events/",
"related": "/organisations/696/events/"
},
"data": [
  {
"type": "events",
"id": "118825"
}
],
},
"organisations": {
"links": {
"self": "/organisations/696/agreements/55404/relationships/organisations/",
"related": "/organisations/"
},
"data": [
  {
"type": "organisations",
"id": "696"
}
],
}
}
}
],
}
	},
	744: {
		users: {
			
			"meta": {
			"total-rows": "1",
			"total-pages": 1
			},
			"links": {
			"self": "/users/2?userId=2&organisationId=744"
			},
			"data": [
			  {
			"type": "users",
			"id": 2,
			"attributes": {
			"audit": {
			"insertedDate": 1382328111000,
			"insertedBy": 0,
			"updatedDate": 1468899111000,
			"updatedBy": 0
			},
			"username": "Dave",
			"firstName": "David",
			"surname": "Bromley",
			"rememberMe": "No",
			"passwordResetRequired": "No",
			"lastLoggedInDate": 1468899111000,
			"acceptTermsAndConditions": 1406577512000,
			"loginEmail": "dave@nomosone.com",
			"walkThrough": [],
			"walkThroughNotification": true,
			"toDo": {
			"toDos": [],
			"viewMode": "all"
			},
			"seenNewDashboardWelcome": true,
			"navigatorMode": "expand"
			}
			}
			],
			
		},
		agreements: {
			"meta": {
			"total-rows": "2",
			"total-pages": 1
			},
			"links": {
			"self": "/organisations/744/agreements?sort=knownAs&offset=0&rows=200"
			},
			"data": [
			  {
			"type": "agreements",
			"id": 91095,
			"attributes": {
			"insertedDate": 1453432163000,
			"insertedBy": 378,
			"updatedDate": 1461044427000,
			"knownAs": "Baigent, Silver and Coulter",
			"legalDescription": "That Part Lot 1 on DP33845 Awhea District marked &quot;J&quot; and &quot;K&quot; on DP87015 That part Section 184 Block VI Waipawa SD marked &quot;E, &quot;G&quot; and &quot;H&quot; on DP87015 That Part Section 207 Block VI Waipawa SD marked &quot;F&quot; on DP87015",
			"internalReferences": [],
			"jurisdiction": "New Zealand",
			"easementType": "Right to Convey Electricity:Right to Convey Telecommunications",
			"agreementType": "Easement",
			"client": "Dominant Tenement",
			"currency": "NZD",
			"commercial": "Yes",
			"agreementMode": "Active",
			"commencementDate": "807105600000",
			"expiryDate": "1753790400000",
			"totalAnnualRent": "17512.25",
			"rent": {
			"premises": {
			"annual": "17512.25",
			"monthly": "1459.35",
			"weekly": "336.77"
			},
			"carparks": {
			"annual": "0.00",
			"monthly": "0.00",
			"weekly": "0.00"
			}
			},
			"paymentStartDate": "807105600000",
			"paymentPeriod": "Annual",
			"rentPaymentDay": "31st",
			"rentPaymentMonth": "July",
			"rentDay": "Sunday",
			"taxation": "Plus Tax",
			"proportionOfOutgoings": "Refer to Clause 8.5 in Easement",
			"additionalRent": "Access Fee - $3,557.18 (adjusted by CPI annually also)",
			"businessUse": "The right to convey Telecommunications and Electricity in, under and over the Telecommunications and Electricity Easement Land without interruption or impediment on the terms and conditions set out in Schedules 2 and 5.\nThe right to pass and repass over and along the Right of Way Easement Land without interruption or impediment and to maintain that land on the terms and conditions set out in Schedules 4 and 5.",
			"originalDeedMadeDate": "921499200000",
			"initialState": {
			"agreement": {
			"agreementId": "91095",
			"agreementType": "Easement",
			"client": "Dominant Tenement",
			"currency": "NZD",
			"commercial": "Yes",
			"agreementMode": "Active",
			"commencementDate": "807105600000",
			"expiryDate": "1753790400000",
			"totalAnnualRent": "17512.25",
			"rent": {
			"premises": {
			"annual": "17512.25",
			"monthly": "1459.35",
			"weekly": "336.77"
			},
			"carparks": {
			"annual": "0.00",
			"monthly": "0.00",
			"weekly": "0.00"
			}
			},
			"paymentStartDate": "807105600000",
			"paymentPeriod": "Annual",
			"rentPaymentDay": "31st",
			"rentPaymentMonth": "July",
			"rentDay": "Sunday",
			"taxation": "Plus Tax",
			"proportionOfOutgoings": "Refer to Clause 8.5 in Easement",
			"additionalRent": "Access Fee - $3,557.18 (adjusted by CPI annually also)",
			"businessUse": "The right to convey Telecommunications and Electricity in, under and over the Telecommunications and Electricity Easement Land without interruption or impediment on the terms and conditions set out in Schedules 2 and 5.\nThe right to pass and repass over and along the Right of Way Easement Land without interruption or impediment and to maintain that land on the terms and conditions set out in Schedules 4 and 5.",
			"originalDeedMadeDate": "921499200000",
			"parties": {
			"Dominant Tenement": [
			  {
			"entityId": "13894",
			"entityName": "Genesis Energy Limited"
			}
			],
			"Servient Tenement": [
			  {
			"entityId": "14152",
			"entityName": "Henry Baigent"
			},
			  {
			"entityId": 14153,
			"entityName": "Ian Silver"
			},
			  {
			"entityId": 14154,
			"entityName": "Jeremy Coulter"
			}
			],
			}
			}
			}
			},
			"relationships": {
			"properties": {
			"links": {
			"self": "/organisations/744/agreements/91095/relationships/properties/",
			"related": "/organisations/744/properties/"
			},
			"data": [
			  {
			"type": "properties",
			"id": "18697"
			},
			  {
			"type": "properties",
			"id": "18696"
			},
			  {
			"type": "properties",
			"id": "18695"
			},
			  {
			"type": "properties",
			"id": "18694"
			},
			  {
			"type": "properties",
			"id": "3844"
			}
			],
			},
			"events": {
			"links": {
			"self": "/organisations/744/agreements/91095/relationships/events/",
			"related": "/organisations/744/events/"
			},
			"data": [
			  {
			"type": "events",
			"id": "131432"
			},
			  {
			"type": "events",
			"id": "131433"
			},
			  {
			"type": "events",
			"id": "131434"
			},
			  {
			"type": "events",
			"id": "131440"
			},
			  {
			"type": "events",
			"id": "131441"
			},
			  {
			"type": "events",
			"id": "131442"
			},
			  {
			"type": "events",
			"id": "131443"
			},
			  {
			"type": "events",
			"id": "131444"
			},
			  {
			"type": "events",
			"id": "131445"
			},
			  {
			"type": "events",
			"id": "131446"
			},
			  {
			"type": "events",
			"id": "131447"
			},
			  {
			"type": "events",
			"id": "131448"
			},
			  {
			"type": "events",
			"id": "131449"
			},
			  {
			"type": "events",
			"id": "131450"
			},
			  {
			"type": "events",
			"id": "131451"
			},
			  {
			"type": "events",
			"id": "131452"
			},
			  {
			"type": "events",
			"id": "131453"
			},
			  {
			"type": "events",
			"id": "131454"
			},
			  {
			"type": "events",
			"id": "131455"
			},
			  {
			"type": "events",
			"id": "131456"
			},
			  {
			"type": "events",
			"id": "131457"
			},
			  {
			"type": "events",
			"id": "131458"
			},
			  {
			"type": "events",
			"id": "131459"
			},
			  {
			"type": "events",
			"id": "131460"
			},
			  {
			"type": "events",
			"id": "131461"
			},
			  {
			"type": "events",
			"id": "131462"
			},
			  {
			"type": "events",
			"id": "131463"
			},
			  {
			"type": "events",
			"id": "131464"
			},
			  {
			"type": "events",
			"id": "131465"
			},
			  {
			"type": "events",
			"id": "131466"
			},
			  {
			"type": "events",
			"id": "131467"
			}
			],
			},
			"organisations": {
			"links": {
			"self": "/organisations/744/agreements/91095/relationships/organisations/",
			"related": "/organisations/"
			},
			"data": [
			  {
			"type": "organisations",
			"id": "744"
			}
			],
			},
			"parties": {
			"Dominant Tenement": {
			"links": {
			"self": "/organisations/744/agreements/91095/relationships/parties/Dominant Tenement",
			"related": "/organisations/744/entities/"
			},
			"data": [
			  {
			"type": "entities",
			"id": "13894"
			}
			],
			},
			"Servient Tenement": {
			"links": {
			"self": "/organisations/744/agreements/91095/relationships/parties/Servient Tenement",
			"related": "/organisations/744/entities/"
			},
			"data": [
			  {
			"type": "entities",
			"id": "14152"
			},
			  {
			"type": "entities",
			"id": 14153
			},
			  {
			"type": "entities",
			"id": 14154
			}
			],
			}
			},
			"notFollowing": {
			"users": {
			"links": {
			"self": "/organisations/744/agreements/91095/relationships/notFollowing/users/",
			"related": "/users/"
			},
			"data": [
			  {
			"type": "users",
			"id": "2"
			},
			  {
			"type": "users",
			"id": "378"
			},
			  {
			"type": "users",
			"id": "633"
			},
			  {
			"type": "users",
			"id": "1458"
			},
			  {
			"type": "users",
			"id": "1460"
			},
			  {
			"type": "users",
			"id": "1461"
			}
			],
			}
			}
			}
			},
			  {
			"type": "agreements",
			"id": 83608,
			"attributes": {
			"insertedDate": 1453080815000,
			"insertedBy": 378,
			"updatedDate": 1461044426000,
			"knownAs": "Hau Nui Windfarm -Mathewson",
			"legalDescription": "Lot 2 DP 33845 and Section 1 on Survey Plan 30745. Block X of the Waipawa Survey District being Section 206 and part of Section 162 of Lot 2 on Deposited Plan No 2773 (Wellington Registry)",
			"internalReferences": [],
			"jurisdiction": "New Zealand",
			"agreementType": "Lease",
			"client": "Tenant",
			"currency": "NZD",
			"commercial": "Yes",
			"agreementMode": "Active",
			"commencementDate": "965044800000",
			"expiryDate": "-177076800000",
			"totalAnnualRent": "19883.29",
			"rent": {
			"premises": {
			"annual": "19883.29",
			"monthly": "1656.94",
			"weekly": "382.37"
			},
			"carparks": {
			"annual": "0.00",
			"monthly": "0.00",
			"weekly": "0.00"
			}
			},
			"paymentStartDate": "965044800000",
			"paymentPeriod": "Annual",
			"rentPaymentDay": "21st",
			"rentPaymentMonth": "May",
			"rentDay": "Sunday",
			"taxation": "Plus Tax",
			"businessUse": "Development of a Wind Farm",
			"initialState": {
			"agreement": {
			"agreementId": "83608",
			"agreementType": "Lease",
			"client": "Tenant",
			"currency": "NZD",
			"commercial": "Yes",
			"agreementMode": "Active",
			"commencementDate": "965044800000",
			"expiryDate": "2978683200000",
			"totalAnnualRent": "19883.29",
			"rent": {
			"premises": {
			"annual": "19883.29",
			"monthly": "1656.94",
			"weekly": "382.37"
			},
			"carparks": {
			"annual": "0.00",
			"monthly": "0.00",
			"weekly": "0.00"
			}
			},
			"paymentStartDate": "965044800000",
			"paymentPeriod": "Annual",
			"rentPaymentDay": "21st",
			"rentPaymentMonth": "May",
			"rentDay": "Sunday",
			"taxation": "Plus Tax",
			"businessUse": "Development of a Wind Farm",
			"parties": {
			"Tenant": [
			  {
			"entityId": "13894",
			"entityName": "Genesis Energy Limited"
			}
			],
			"Landlord": [
			  {
			"entityId": "13895",
			"entityName": "Andrew Mathewson"
			},
			  {
			"entityId": 13896,
			"entityName": "Robert Mathewson"
			},
			  {
			"entityId": 13897,
			"entityName": "Gwendolen Mathewson"
			},
			  {
			"entityId": 13898,
			"entityName": "Downie Stewart Trustee Limited"
			}
			],
			}
			}
			}
			},
			"relationships": {
			"properties": {
			"links": {
			"self": "/organisations/744/agreements/83608/relationships/properties/",
			"related": "/organisations/744/properties/"
			},
			"data": [
			  {
			"type": "properties",
			"id": "3723"
			}
			],
			},
			"events": {
			"links": {
			"self": "/organisations/744/agreements/83608/relationships/events/",
			"related": "/organisations/744/events/"
			},
			"data": [
			  {
			"type": "events",
			"id": "128856"
			},
			  {
			"type": "events",
			"id": "146468"
			},
			  {
			"type": "events",
			"id": "146469"
			},
			  {
			"type": "events",
			"id": "146470"
			},
			  {
			"type": "events",
			"id": "146472"
			},
			  {
			"type": "events",
			"id": "146473"
			},
			  {
			"type": "events",
			"id": "146474"
			},
			  {
			"type": "events",
			"id": "146476"
			},
			  {
			"type": "events",
			"id": "146477"
			},
			  {
			"type": "events",
			"id": "146478"
			},
			  {
			"type": "events",
			"id": "146479"
			},
			  {
			"type": "events",
			"id": "146480"
			},
			  {
			"type": "events",
			"id": "146481"
			},
			  {
			"type": "events",
			"id": "146482"
			},
			  {
			"type": "events",
			"id": "146483"
			},
			  {
			"type": "events",
			"id": "146484"
			},
			  {
			"type": "events",
			"id": "146485"
			},
			  {
			"type": "events",
			"id": "146486"
			},
			  {
			"type": "events",
			"id": "146487"
			},
			  {
			"type": "events",
			"id": "146488"
			},
			  {
			"type": "events",
			"id": "146489"
			},
			  {
			"type": "events",
			"id": "146490"
			},
			  {
			"type": "events",
			"id": "146491"
			},
			  {
			"type": "events",
			"id": "146492"
			},
			  {
			"type": "events",
			"id": "146493"
			},
			  {
			"type": "events",
			"id": "146494"
			},
			  {
			"type": "events",
			"id": "146495"
			},
			  {
			"type": "events",
			"id": "146496"
			},
			  {
			"type": "events",
			"id": "146497"
			},
			  {
			"type": "events",
			"id": "146498"
			},
			  {
			"type": "events",
			"id": "146499"
			},
			  {
			"type": "events",
			"id": "146500"
			},
			  {
			"type": "events",
			"id": "146501"
			},
			  {
			"type": "events",
			"id": "146502"
			},
			  {
			"type": "events",
			"id": "146503"
			},
			  {
			"type": "events",
			"id": "146504"
			},
			  {
			"type": "events",
			"id": "146505"
			},
			  {
			"type": "events",
			"id": "146506"
			},
			  {
			"type": "events",
			"id": "146507"
			},
			  {
			"type": "events",
			"id": "146508"
			},
			  {
			"type": "events",
			"id": "146509"
			},
			  {
			"type": "events",
			"id": "146510"
			},
			  {
			"type": "events",
			"id": "146511"
			},
			  {
			"type": "events",
			"id": "146512"
			},
			  {
			"type": "events",
			"id": "146513"
			},
			  {
			"type": "events",
			"id": "146514"
			},
			  {
			"type": "events",
			"id": "146515"
			},
			  {
			"type": "events",
			"id": "146516"
			},
			  {
			"type": "events",
			"id": "146517"
			},
			  {
			"type": "events",
			"id": "146518"
			},
			  {
			"type": "events",
			"id": "146519"
			},
			  {
			"type": "events",
			"id": "146520"
			},
			  {
			"type": "events",
			"id": "146521"
			},
			  {
			"type": "events",
			"id": "146522"
			},
			  {
			"type": "events",
			"id": "146523"
			},
			  {
			"type": "events",
			"id": "146524"
			},
			  {
			"type": "events",
			"id": "146525"
			},
			  {
			"type": "events",
			"id": "146526"
			},
			  {
			"type": "events",
			"id": "146527"
			},
			  {
			"type": "events",
			"id": "146528"
			},
			  {
			"type": "events",
			"id": "146529"
			},
			  {
			"type": "events",
			"id": "146530"
			},
			  {
			"type": "events",
			"id": "146531"
			},
			  {
			"type": "events",
			"id": "146532"
			},
			  {
			"type": "events",
			"id": "146533"
			},
			  {
			"type": "events",
			"id": "146534"
			}
			],
			},
			"organisations": {
			"links": {
			"self": "/organisations/744/agreements/83608/relationships/organisations/",
			"related": "/organisations/"
			},
			"data": [
			  {
			"type": "organisations",
			"id": "744"
			}
			],
			},
			"parties": {
			"Tenant": {
			"links": {
			"self": "/organisations/744/agreements/83608/relationships/parties/Tenant/",
			"related": "/organisations/744/entities/"
			},
			"data": [
			  {
			"type": "entities",
			"id": "13894"
			}
			],
			},
			"Landlord": {
			"links": {
			"self": "/organisations/744/agreements/83608/relationships/parties/Landlord/",
			"related": "/organisations/744/entities/"
			},
			"data": [
			  {
			"type": "entities",
			"id": "13895"
			},
			  {
			"type": "entities",
			"id": 13896
			},
			  {
			"type": "entities",
			"id": 13897
			},
			  {
			"type": "entities",
			"id": 13898
			}
			],
			}
			},
			"notFollowing": {
			"users": {
			"links": {
			"self": "/organisations/744/agreements/83608/relationships/notFollowing/users/",
			"related": "/users/"
			},
			"data": [
			  {
			"type": "users",
			"id": "2"
			},
			  {
			"type": "users",
			"id": "378"
			},
			  {
			"type": "users",
			"id": "633"
			},
			  {
			"type": "users",
			"id": "1458"
			},
			  {
			"type": "users",
			"id": "1460"
			},
			  {
			"type": "users",
			"id": "1461"
			}
			],
			}
			}
			}
			}
			],
			}
	}
}