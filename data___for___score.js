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
        personalInformation: {
            customerReferenceIdentifier,
            socialSecurityNumber,
        }
    }
}
    < tr >
<td class="px-6 py-4 whitespace-nowrap">
    <div class="flex items-center">
        <div class="flex-shrink-0 h-10 w-10">
            <img class="h-10 w-10 rounded-full" src={user}>
        </div>
        <div class="ml-4">
            <div class="text-sm font-medium text-gray-900">
                Jane Cooper
            </div>
            <div class="text-sm text-gray-500">
                jane.cooper@example.com
            </div>
        </div>
    </div>
</td>
<td class="px-6 py-4 whitespace-nowrap">
    <div class="text-sm text-gray-900">Regional Paradigm Technician</div>
    <div class="text-sm text-gray-500">Optimization</div>
</td>
<td class="px-6 py-4 whitespace-nowrap">
    <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
        Active
    </span>
</td>
<td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
    Admin
</td>
<td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
    jane.cooper@example.com
</td>
<td class="px-6 py-4 whitespace-nowrap  text-sm font-medium">
    <a href="#" class="text-indigo-600 hover:text-indigo-900">Edit</a>
    <a href="#" class="ml-2 text-red-600 hover:text-red-900">Delete</a>
</td>
</ >