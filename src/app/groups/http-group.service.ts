import { Group } from "@/models/group"

export const getGroups = async () => fetch(
    `${process.env.BASE_URL}/groups`,
    { next: {tags: ['groups']}}
).then(async (res) => (await res.json()) as Group[])

export const getGroup = async(groupId: number) => fetch(
    `${process.env.BASE_URL}/groups/${groupId}`,
    { cache: 'no-store' }
).then(async (res) => (await res.json()) as Group)