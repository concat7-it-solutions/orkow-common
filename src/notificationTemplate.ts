export type TemplateUserParams = { imageUrl: string; fullname: string }

export default function notificationTemplate(
  user: TemplateUserParams,
  type: string
) {
  const text = getText(type)

  return `<span class="flex-shrink-0 inline-block relative">
      <img class="h-10 w-10 rounded-full" src=${user.imageUrl} alt="" />
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
      return 'has started a business.'
    case 'updateBusiness':
      return 'has updated the profile information.'
    case 'newBilling':
      return 'A bill has been generated for you.'
    case 'updateBilling':
      return 'Billing status has been updated.'
    case 'newAgent':
      return 'has become an agent.'
    case 'updateAgent':
      return 'has updated the profile information.'
    case 'newUser':
      return 'has become a user.'
    case 'newShop':
      return 'has create a shop.'
    case 'verifying_in_process':
      return 'your shop verifying process undergoing.'
    case 'verified':
      return 'your shop is ready for selling goods.'
    case 'active':
      return 'your shop has been activated.'
    case 'inactive':
      return 'your shop has been deactivated.'
    case 'newEnroll':
      return 'has enrolled.'
    case 'updateEnroll':
      return 'has updated an enroll.'
    case 'newOrder':
      return 'has placed an order.'
    case 'newSell':
      return 'has placed a sell order'
    case 'newPurchase':
      return 'has purchased'
    case 'statusChange':
      return 'status updated.'
    case 'newReview':
      return 'has reviewed on your product.'

    default:
      return 'status updated.'
  }
}
