import {
  Approval as ApprovalEvent,
  ApprovalForAll as ApprovalForAllEvent,
  BadgeEarned as BadgeEarnedEvent,
  CauseCreated as CauseCreatedEvent,
  CauseTargetReached as CauseTargetReachedEvent,
  DonationReceived as DonationReceivedEvent,
  FundsWithdrawn as FundsWithdrawnEvent,
  ImpactScoreUpdated as ImpactScoreUpdatedEvent,
  MilestoneAdded as MilestoneAddedEvent,
  MilestoneCompleted as MilestoneCompletedEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
  Transfer as TransferEvent
} from "../generated/TransparentDonationTracker/TransparentDonationTracker"
import {
  Approval,
  ApprovalForAll,
  BadgeEarned,
  CauseCreated,
  CauseTargetReached,
  DonationReceived,
  FundsWithdrawn,
  ImpactScoreUpdated,
  MilestoneAdded,
  MilestoneCompleted,
  OwnershipTransferred,
  Transfer
} from "../generated/schema"

export function handleApproval(event: ApprovalEvent): void {
  let entity = new Approval(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.owner = event.params.owner
  entity.approved = event.params.approved
  entity.tokenId = event.params.tokenId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleApprovalForAll(event: ApprovalForAllEvent): void {
  let entity = new ApprovalForAll(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.owner = event.params.owner
  entity.operator = event.params.operator
  entity.approved = event.params.approved

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleBadgeEarned(event: BadgeEarnedEvent): void {
  let entity = new BadgeEarned(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.donor = event.params.donor
  entity.badgeType = event.params.badgeType
  entity.tokenId = event.params.tokenId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleCauseCreated(event: CauseCreatedEvent): void {
  let entity = new CauseCreated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.causeId = event.params.causeId
  entity.causeName = event.params.causeName
  entity.description = event.params.description
  entity.beneficiary = event.params.beneficiary
  entity.targetAmount = event.params.targetAmount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleCauseTargetReached(event: CauseTargetReachedEvent): void {
  let entity = new CauseTargetReached(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.causeId = event.params.causeId
  entity.causeName = event.params.causeName
  entity.finalAmount = event.params.finalAmount
  entity.donorCount = event.params.donorCount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleDonationReceived(event: DonationReceivedEvent): void {
  let entity = new DonationReceived(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.donor = event.params.donor
  entity.causeId = event.params.causeId
  entity.causeName = event.params.causeName
  entity.amount = event.params.amount
  entity.impactScore = event.params.impactScore
  entity.timestamp = event.params.timestamp

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleFundsWithdrawn(event: FundsWithdrawnEvent): void {
  let entity = new FundsWithdrawn(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.causeId = event.params.causeId
  entity.causeName = event.params.causeName
  entity.beneficiary = event.params.beneficiary
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleImpactScoreUpdated(event: ImpactScoreUpdatedEvent): void {
  let entity = new ImpactScoreUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.donor = event.params.donor
  entity.newScore = event.params.newScore
  entity.causeId = event.params.causeId
  entity.causeName = event.params.causeName

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleMilestoneAdded(event: MilestoneAddedEvent): void {
  let entity = new MilestoneAdded(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.causeId = event.params.causeId
  entity.causeName = event.params.causeName
  entity.description = event.params.description
  entity.targetAmount = event.params.targetAmount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleMilestoneCompleted(event: MilestoneCompletedEvent): void {
  let entity = new MilestoneCompleted(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.causeId = event.params.causeId
  entity.causeName = event.params.causeName
  entity.milestoneIndex = event.params.milestoneIndex
  entity.completionTime = event.params.completionTime

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent
): void {
  let entity = new OwnershipTransferred(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleTransfer(event: TransferEvent): void {
  let entity = new Transfer(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.from = event.params.from
  entity.to = event.params.to
  entity.tokenId = event.params.tokenId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
