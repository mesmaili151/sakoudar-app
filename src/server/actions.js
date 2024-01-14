import HttpError from '@wasp/core/HttpError.js'

export const createCampaign = async (args, context) => {
  if (!context.user) { throw new HttpError(401) };

  // Implement the logic to create a new campaign here.
}

export const createPayout = async ({ campaignId, amount }, context) => {
  if (!context.user) { throw new HttpError(401) };

  const campaign = await context.entities.Campaign.findUnique({
    where: { id: campaignId }
  });
  if (!campaign) { throw new HttpError(404) };

  if (campaign.userId !== context.user.id) { throw new HttpError(403) };

  return context.entities.Payout.create({
    data: {
      amount,
      campaign: { connect: { id: campaignId } }
    }
  });
}