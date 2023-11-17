'use server'

import { CreateGroup } from '@/models/create-group'
import { Group } from '@/models/group'

export const getGroups = async () =>
  fetch(`${process.env.BASE_URL}/groups`, {
    cache: 'no-store',
    next: { tags: ['groups'] },
  }).then(async (res) => (await res.json()) as Group[])

export const getGroup = async (groupId: number) =>
  fetch(`${process.env.BASE_URL}/groups/${groupId}`, {
    cache: 'no-store',
    next: { tags: ['groups'] },
  }).then(async (res) => (await res.json()) as Group)

export const createGroup = async (group: CreateGroup) => {
  console.log('group', JSON.stringify(group))
  return fetch(`${process.env.BASE_URL}/groups`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(group),
  }).then(async (res) => (await res.json()) as Group)
}
