export type TemplateUserParams = { fullname: string; imageUrl?: string } // if imageUrl not a standard url then consider a userId

export default function notificationTemplate(
  user: TemplateUserParams,
  type: string
) {
  const text = getText(type)

  return `<span class="flex-shrink-0 inline-block relative">
      <img class="h-10 w-10 rounded-full" src="${user.imageUrl ?? null}" alt="${user.fullname}" />
      <span class="absolute top-0 right-0 block h-2.5 w-2.5 rounded-full" aria-hidden="true"></span>
    </span>
    <div class="ml-4 truncate">
      <p class="text-sm w-46 sm:w-60.5 font-medium text-gray-900 truncate">${user.fullname}</p>
      <p class="text-sm line-clamp-2 text-gray-500 whitespace-pre-line">${text}</p>
    </div>`
}

function getText(type: string): string {
  switch (type) {
    case 'newBusiness':
      return 'has started a new business.'
    case 'updateBusiness':
      return 'has updated the business profile.'
    case 'newBilling':
      return 'A new bill has been generated for you.'
    case 'updateBilling':
      return 'The billing status has been updated.'
    case 'newAgent':
      return 'has registered as an agent.'
    case 'updateAgent':
      return 'has updated the agent profile.'
    case 'newUser':
      return 'has registered as a user.'
    case 'newShop':
      return 'has created a new shop.'
    case 'verifying_in_process':
      return 'Your shop is currently under verification.'
    case 'verified':
      return 'Your shop is verified and ready for business.'
    case 'active':
      return 'Your shop has been activated.'
    case 'suspended':
      return 'Your shop has been suspended.'
    case 'rejected':
      return 'Your shop verification has been rejected.'
    case 'inactive':
      return 'Your shop has been deactivated.'
    case 'newEnroll':
      return 'has enrolled successfully.'
    case 'updateEnroll':
      return 'has updated the enrollment information.'
    case 'newOrder':
      return 'has placed a new order.'
    case 'newSell':
      return 'has placed a new order.'
    case 'newPurchase':
      return 'has made a purchase.'
    case 'statusChange':
      return 'The status has been updated.'
    case 'newReview':
      return 'has reviewed your product.'
    default:
      return 'The status has been updated.'
  }
}
