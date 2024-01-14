import HttpError from '@wasp/core/HttpError.js'

export const getUser = async ({ userId }, context) => {
  if (!context.user) { throw new HttpError(401) }

  const user = await context.entities.User.findUnique({
    where: { id: userId },
    include: { campaigns: true }
  })

  if (!user) { throw new HttpError(400) }

  return user
}

export const getInfluencers = async (args, context) => {
  return context.entities.Influencer.findMany({
    orderBy: { platform: 'asc' }
  });
}

export const getCampaigns = async ({ userId }, context) => {
  if (!context.user) { throw new HttpError(401) }

  const user = await context.entities.User.findUnique({ where: { id: userId } })
  if (!user) { throw new HttpError(400) }

  return context.entities.Campaign.findMany({ where: { userId } })
}

export const getPayouts = async (args, context) => {
  if (!context.user) { throw new HttpError(401) }

  const { userId } = args;

  const user = await context.entities.User.findUnique({
    where: { id: userId }
  });

  if (!user) { throw new HttpError(400, 'User not found') }

  const campaigns = await context.entities.Campaign.findMany({
    where: { userId: user.id }
  });

  return campaigns;
}