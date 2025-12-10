export type SellPaymentStatusTitle =
  | 'New'
  | 'Pending'
  | 'Paid'
  | 'Refunded'
  | 'Canceled'
  | 'Abandoned'
  | 'Overdue'
  | 'In Dispute'
  | 'Awaiting Gateway'
  | 'Failed Gateway'
export type SellStatusTitle =
  | 'In process...'
  | 'Completed'
  | 'Cancelled'
  | 'Rejected'
export type BillingStatusTitle =
  | 'New'
  | 'Pending'
  | 'Paid'
  | 'Refunded'
  | 'Canceled'
  | 'Abandoned'
  | 'Overdue'
  | 'In Dispute'

const getStatusDescription = (status: string) => {
  switch (status) {
    case 'New':
      return "A bill is marked as 'New' when it is first added. A new bill can also be 'Awaiting Gateway', 'Failed Gateway', 'Overdue', and 'In Dispute'. A 'New' bill can move to these statuses: 'Pending', 'Paid', 'Canceled'"
    case 'Pending':
      return "A bill is marked as 'Pending' when a user selects a manual payment method. The bill will continue to have a 'Pending' status until the payment is recorded by an administrator or an automatic payment method is selected. A 'Pending' bill can move to these statuses: 'Paid', 'Canceled'"
    case 'Paid':
      return "A bill is marked as 'Paid' once payment is received, either automatically at the successful completion of a credit card transaction or manually by a billing administrator. A 'Paid' bill can move to these statuses: 'Refunded', 'Canceled'"
    case 'Refunded':
      return "A bill is marked as 'Refunded' if a partial or full amount of the bill has been refunded to the account. A 'Refunded' bill can move to these statuses: 'Canceled'"
    case 'Canceled':
      return "Any bill can be canceled. If a bill is new or pending, this will stop any further action on the bill. Canceled bills can't be paid and won't become overdue. If a bill has already been paid, canceling the bill will default to issuing a full refund. If you need to retain a handling fee, you can manually edit the refund amount to reflect this. Refunds issued when cancelling a bill will automatically issue credits for any bills paid by credit card. Canceled bills remain canceled; they cannot move to another status or be uncanceled."
    case 'Overdue':
      return "A bill is marked as 'Overdue' if the bill due date has passed and the payment has not been recorded. Email notices can be scheduled to go out based on a bill's due date using the Schedule Overdue Notices."
    case 'In Dispute':
      return 'If there is a dispute about the bill, it can be marked as In Dispute by a billing administrator. Only unpaid bills can be marked as in dispute. This will prevent the account from receiving overdue notices by email until the dispute has been resolved.'
    case 'Awaiting Gateway':
      return 'This status is assigned when an attempt to charge or credit a credit card is not immediately processed. Once the credit card transaction is complete, this status will be removed.'
    case 'Failed Gateway':
      return "When a credit card transaction fails, either to charge or to credit money to a credit card, the bill will show a status of 'Failed Gateway'. Credit card transactions can fail for many reasons, and can be retried most of the time."
    case 'Abandoned':
      return 'If a Pending payment is never completed it becomes Abandoned after a week.'

    // FOR SHOP
    case 'Request':
      return "A shop is marked as 'Request' when it is first added. A 'Request' bill can move to these statuses: 'Waiting for verification'"
    case 'Waiting for verification':
      return "A shop is marked as 'Waiting for verification' if an administrator accepts the request. A 'Waiting for verification' can move to these statuses: 'Verifying in process'"
    case 'Verifying in process':
      return "A shop is marked as 'Verifying in process' if an administrator accepts the request. A 'Verifying in process' can move to these statuses: 'Actively selling', 'Suspend'"
    case 'Actively selling':
      return "A shop is marked as 'Actively selling' once payment is received, either automatically at the successful completion of a credit card transaction or manually by a billing administrator. A 'Actively selling' can move to these statuses: 'Suspend', 'Reject'"
    case 'Suspend':
      return "If an administrator suspends; A 'Suspend' can move to these statuses: 'Actively selling', 'Reject'"
    case 'Reject':
      return 'If an administrator refuses; Reject remain reject; they cannot move to another status.'

    // FOR ENROLL
    case 'Waiting':
      return "An enroll is marked as 'Waiting' when it is first added. A 'Waiting' bill can move to these statuses: 'Active', 'Inactive'"
    case 'Active':
      return "An enroll or shop is marked as 'Active' once payment is received, either automatically at the successful completion of a credit card transaction or manually by a billing administrator."
    case 'Inactive':
      return "Marked as 'Inactive' if the due date has passed and the payment has not been recorded. Email notices can be scheduled to go out based on a due date using the Schedule Overdue Notices."

    // FOR SELL
    case 'In process...':
      return "An sell is marked as 'In process...' when it is first added. A 'In process...' sell can move to these statuses: 'Completed', 'Cancelled'"
    case 'Completed':
      return "A sell is marked as 'Completed' once payment is received, either automatically at the successful completion of a credit card transaction or manually by a billing administrator. A 'Completed' can move to these statuses: 'Cancelled'"
    case 'Cancelled':
      return "Any sell can be Cancelled. If a sell is 'In process...', this will stop any further action on the bill. Cancelled sell can't be Completed and won't become rejected. Cancelled sell remain cancelled; they cannot move to another status or be uncancelled"
    case 'Rejected':
      return "A sell is marked 'Rejected' once when the sell is 'Completed'. If a sell has already been paid, rejecting the sell will default to issuing a full refund. Rejected sell can't be 'Completed' and won't become 'Cancelled'. Rejected sell remain rejected; they cannot move to another status."

    default:
      return ''
  }
}

export default getStatusDescription

// STATUS_TEXT DESCRIPTION
// // FOR BILLING AND BILLING PAYMENT
// New: A bill is marked as 'New' when it is first added. A new bill can also be 'Awaiting Gateway', 'Failed Gateway', 'Overdue', and 'In Dispute'. A 'New' bill can move to these statuses: 'Pending', 'Paid', 'Canceled'
// Pending: A bill is marked as 'Pending' when a user selects a manual payment method. The bill will continue to have a 'Pending' status until the payment is recorded by an administrator or an automatic payment method is selected. A 'Pending' bill can move to these statuses: 'Paid', 'Canceled'
// Paid: A bill is marked as 'Paid' once payment is received, either automatically at the successful completion of a credit card transaction or manually by a billing administrator. A 'Paid' bill can move to these statuses: 'Refunded', 'Canceled'
// Refunded: A bill is marked as 'Refunded' if a partial or full amount of the bill has been refunded to the account. A 'Refunded' bill can move to these statuses: 'Canceled'
// Canceled:  Any bill can be canceled. If a bill is new or pending, this will stop any further action on the bill. Canceled bills can't be paid and won't become overdue. If a bill has already been paid, canceling the bill will default to issuing a full refund. If you need to retain a handling fee, you can manually edit the refund amount to reflect this. Refunds issued when cancelling a bill will automatically issue credits for any bills paid by credit card. Canceled bills remain canceled; they cannot move to another status or be uncanceled.
// Overdue: A bill is marked as 'Overdue' if the bill due date has passed and the payment has not been recorded. Email notices can be scheduled to go out based on a bill's due date using the Schedule Overdue Notices.
// In Dispute: If there is a dispute about the bill, it can be marked as In Dispute by a billing administrator. Only unpaid bills can be marked as in dispute. This will prevent the account from receiving overdue notices by email until the dispute has been resolved.
// Awaiting Gateway: This status is assigned when an attempt to charge or credit a credit card is not immediately processed. Once the credit card transaction is complete, this status will be removed.
// Failed Gateway: When a credit card transaction fails, either to charge or to credit money to a credit card, the bill will show a status of 'Failed Gateway'. Credit card transactions can fail for many reasons, and can be retried most of the time.
// Abandoned: If a Pending payment is never completed it becomes Abandoned after a week.

// Important link: https://www.oasis-open.org/khelp/billing/user_help/html/billing_lifecycle.html

// // FOR SHOP
// Request: A shop is marked as 'Request' when it is first added. A 'Request' bill can move to these statuses: 'Waiting for verification'
// Waiting for verification: A shop is marked as 'Waiting for verification' if an administrator accepts the request. A 'Waiting for verification' can move to these statuses: 'Verifying in process'
// Verifying in process: A shop is marked as 'Verifying in process' if an administrator accepts the request. A 'Verifying in process' can move to these statuses: 'Actively selling', 'Suspend'
// Actively selling: A shop is marked as 'Actively selling' once payment is received, either automatically at the successful completion of a credit card transaction or manually by a billing administrator. A 'Actively selling' can move to these statuses: 'Suspend', 'Reject'
// Suspend: If an administrator suspends; A 'Suspend' can move to these statuses: 'Actively selling', 'Reject'
// Reject: If an administrator refuses; Reject remain reject; they cannot move to another status.

// // FOR ENROLL
// Waiting: An enroll is marked as 'Waiting' when it is first added. A 'Waiting' bill can move to these statuses: 'Active', 'Inactive'
// Active: An enroll or shop is marked as 'Active' once payment is received, either automatically at the successful completion of a credit card transaction or manually by a billing administrator.
// Inactive: Marked as 'Inactive' if the due date has passed and the payment has not been recorded. Email notices can be scheduled to go out based on a due date using the Schedule Overdue Notices.

// FOR SELL
// 'In process...': An sell is marked as 'In process...' when it is first added. A 'In process...' sell can move to these statuses: 'Completed', 'Cancelled'
// Completed: A sell is marked as 'Completed' once payment is received, either automatically at the successful completion of a credit card transaction or manually by a billing administrator. A 'Completed' can move to these statuses: 'Cancelled'
// Cancelled: Any sell can be Cancelled. If a sell is 'In process...', this will stop any further action on the bill. Cancelled sell can't be Completed and won't become rejected. Cancelled sell remain cancelled; they cannot move to another status or be uncancelled.
// Rejected: A sell is marked 'Rejected' once when the sell is 'Completed'. If a sell has already been paid, rejecting the sell will default to issuing a full refund. Rejected sell can't be 'Completed' and won't become 'Cancelled'. Rejected sell remain rejected; they cannot move to another status.
