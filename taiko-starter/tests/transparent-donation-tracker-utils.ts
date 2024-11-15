import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt, Bytes } from "@graphprotocol/graph-ts"
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
} from "../generated/TransparentDonationTracker/TransparentDonationTracker"

export function createApprovalEvent(
  owner: Address,
  approved: Address,
  tokenId: BigInt
): Approval {
  let approvalEvent = changetype<Approval>(newMockEvent())

  approvalEvent.parameters = new Array()

  approvalEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  approvalEvent.parameters.push(
    new ethereum.EventParam("approved", ethereum.Value.fromAddress(approved))
  )
  approvalEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )

  return approvalEvent
}

export function createApprovalForAllEvent(
  owner: Address,
  operator: Address,
  approved: boolean
): ApprovalForAll {
  let approvalForAllEvent = changetype<ApprovalForAll>(newMockEvent())

  approvalForAllEvent.parameters = new Array()

  approvalForAllEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  approvalForAllEvent.parameters.push(
    new ethereum.EventParam("operator", ethereum.Value.fromAddress(operator))
  )
  approvalForAllEvent.parameters.push(
    new ethereum.EventParam("approved", ethereum.Value.fromBoolean(approved))
  )

  return approvalForAllEvent
}

export function createBadgeEarnedEvent(
  donor: Address,
  badgeType: string,
  tokenId: BigInt
): BadgeEarned {
  let badgeEarnedEvent = changetype<BadgeEarned>(newMockEvent())

  badgeEarnedEvent.parameters = new Array()

  badgeEarnedEvent.parameters.push(
    new ethereum.EventParam("donor", ethereum.Value.fromAddress(donor))
  )
  badgeEarnedEvent.parameters.push(
    new ethereum.EventParam("badgeType", ethereum.Value.fromString(badgeType))
  )
  badgeEarnedEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )

  return badgeEarnedEvent
}

export function createCauseCreatedEvent(
  causeId: Bytes,
  causeName: string,
  description: string,
  beneficiary: Address,
  targetAmount: BigInt
): CauseCreated {
  let causeCreatedEvent = changetype<CauseCreated>(newMockEvent())

  causeCreatedEvent.parameters = new Array()

  causeCreatedEvent.parameters.push(
    new ethereum.EventParam("causeId", ethereum.Value.fromFixedBytes(causeId))
  )
  causeCreatedEvent.parameters.push(
    new ethereum.EventParam("causeName", ethereum.Value.fromString(causeName))
  )
  causeCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "description",
      ethereum.Value.fromString(description)
    )
  )
  causeCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "beneficiary",
      ethereum.Value.fromAddress(beneficiary)
    )
  )
  causeCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "targetAmount",
      ethereum.Value.fromUnsignedBigInt(targetAmount)
    )
  )

  return causeCreatedEvent
}

export function createCauseTargetReachedEvent(
  causeId: Bytes,
  causeName: string,
  finalAmount: BigInt,
  donorCount: BigInt
): CauseTargetReached {
  let causeTargetReachedEvent = changetype<CauseTargetReached>(newMockEvent())

  causeTargetReachedEvent.parameters = new Array()

  causeTargetReachedEvent.parameters.push(
    new ethereum.EventParam("causeId", ethereum.Value.fromFixedBytes(causeId))
  )
  causeTargetReachedEvent.parameters.push(
    new ethereum.EventParam("causeName", ethereum.Value.fromString(causeName))
  )
  causeTargetReachedEvent.parameters.push(
    new ethereum.EventParam(
      "finalAmount",
      ethereum.Value.fromUnsignedBigInt(finalAmount)
    )
  )
  causeTargetReachedEvent.parameters.push(
    new ethereum.EventParam(
      "donorCount",
      ethereum.Value.fromUnsignedBigInt(donorCount)
    )
  )

  return causeTargetReachedEvent
}

export function createDonationReceivedEvent(
  donor: Address,
  causeId: Bytes,
  causeName: string,
  amount: BigInt,
  impactScore: BigInt,
  timestamp: BigInt
): DonationReceived {
  let donationReceivedEvent = changetype<DonationReceived>(newMockEvent())

  donationReceivedEvent.parameters = new Array()

  donationReceivedEvent.parameters.push(
    new ethereum.EventParam("donor", ethereum.Value.fromAddress(donor))
  )
  donationReceivedEvent.parameters.push(
    new ethereum.EventParam("causeId", ethereum.Value.fromFixedBytes(causeId))
  )
  donationReceivedEvent.parameters.push(
    new ethereum.EventParam("causeName", ethereum.Value.fromString(causeName))
  )
  donationReceivedEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  donationReceivedEvent.parameters.push(
    new ethereum.EventParam(
      "impactScore",
      ethereum.Value.fromUnsignedBigInt(impactScore)
    )
  )
  donationReceivedEvent.parameters.push(
    new ethereum.EventParam(
      "timestamp",
      ethereum.Value.fromUnsignedBigInt(timestamp)
    )
  )

  return donationReceivedEvent
}

export function createFundsWithdrawnEvent(
  causeId: Bytes,
  causeName: string,
  beneficiary: Address,
  amount: BigInt
): FundsWithdrawn {
  let fundsWithdrawnEvent = changetype<FundsWithdrawn>(newMockEvent())

  fundsWithdrawnEvent.parameters = new Array()

  fundsWithdrawnEvent.parameters.push(
    new ethereum.EventParam("causeId", ethereum.Value.fromFixedBytes(causeId))
  )
  fundsWithdrawnEvent.parameters.push(
    new ethereum.EventParam("causeName", ethereum.Value.fromString(causeName))
  )
  fundsWithdrawnEvent.parameters.push(
    new ethereum.EventParam(
      "beneficiary",
      ethereum.Value.fromAddress(beneficiary)
    )
  )
  fundsWithdrawnEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return fundsWithdrawnEvent
}

export function createImpactScoreUpdatedEvent(
  donor: Address,
  newScore: BigInt,
  causeId: Bytes,
  causeName: string
): ImpactScoreUpdated {
  let impactScoreUpdatedEvent = changetype<ImpactScoreUpdated>(newMockEvent())

  impactScoreUpdatedEvent.parameters = new Array()

  impactScoreUpdatedEvent.parameters.push(
    new ethereum.EventParam("donor", ethereum.Value.fromAddress(donor))
  )
  impactScoreUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "newScore",
      ethereum.Value.fromUnsignedBigInt(newScore)
    )
  )
  impactScoreUpdatedEvent.parameters.push(
    new ethereum.EventParam("causeId", ethereum.Value.fromFixedBytes(causeId))
  )
  impactScoreUpdatedEvent.parameters.push(
    new ethereum.EventParam("causeName", ethereum.Value.fromString(causeName))
  )

  return impactScoreUpdatedEvent
}

export function createMilestoneAddedEvent(
  causeId: Bytes,
  causeName: string,
  description: string,
  targetAmount: BigInt
): MilestoneAdded {
  let milestoneAddedEvent = changetype<MilestoneAdded>(newMockEvent())

  milestoneAddedEvent.parameters = new Array()

  milestoneAddedEvent.parameters.push(
    new ethereum.EventParam("causeId", ethereum.Value.fromFixedBytes(causeId))
  )
  milestoneAddedEvent.parameters.push(
    new ethereum.EventParam("causeName", ethereum.Value.fromString(causeName))
  )
  milestoneAddedEvent.parameters.push(
    new ethereum.EventParam(
      "description",
      ethereum.Value.fromString(description)
    )
  )
  milestoneAddedEvent.parameters.push(
    new ethereum.EventParam(
      "targetAmount",
      ethereum.Value.fromUnsignedBigInt(targetAmount)
    )
  )

  return milestoneAddedEvent
}

export function createMilestoneCompletedEvent(
  causeId: Bytes,
  causeName: string,
  milestoneIndex: BigInt,
  completionTime: BigInt
): MilestoneCompleted {
  let milestoneCompletedEvent = changetype<MilestoneCompleted>(newMockEvent())

  milestoneCompletedEvent.parameters = new Array()

  milestoneCompletedEvent.parameters.push(
    new ethereum.EventParam("causeId", ethereum.Value.fromFixedBytes(causeId))
  )
  milestoneCompletedEvent.parameters.push(
    new ethereum.EventParam("causeName", ethereum.Value.fromString(causeName))
  )
  milestoneCompletedEvent.parameters.push(
    new ethereum.EventParam(
      "milestoneIndex",
      ethereum.Value.fromUnsignedBigInt(milestoneIndex)
    )
  )
  milestoneCompletedEvent.parameters.push(
    new ethereum.EventParam(
      "completionTime",
      ethereum.Value.fromUnsignedBigInt(completionTime)
    )
  )

  return milestoneCompletedEvent
}

export function createOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): OwnershipTransferred {
  let ownershipTransferredEvent = changetype<OwnershipTransferred>(
    newMockEvent()
  )

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipTransferredEvent
}

export function createTransferEvent(
  from: Address,
  to: Address,
  tokenId: BigInt
): Transfer {
  let transferEvent = changetype<Transfer>(newMockEvent())

  transferEvent.parameters = new Array()

  transferEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  transferEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  transferEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )

  return transferEvent
}
