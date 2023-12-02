const applicants = {
    orderInfo:
    {
        inquiryDate,
        inquiryType,
        permPurpose,
        trackingId,
        sourceSystemId,
        sourceName,
        resellerName,
        platformName,
        intermediaryName,
        requestor: {
            name,
            endUser,
            email,
            address,
            phoneNumbers,
        }
    },
    primaryConsumer: 
    {
        personalInformation:{
            customerReferenceIdentifier,
            socialSecurityNumber, 
        }
    }
}