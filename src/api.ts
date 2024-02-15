import { useMutation, useQuery } from '@tanstack/react-query'

const API_URL = 'http://localhost:3000'

export interface Restaurant {
  id: string
  name: string
  description: string
  raiting: number
  url: string
}

const getRestaurants = (): Promise<Restaurant[]> =>
  fetch(`${API_URL}/restaurants`).then((res) => res.json())

export const useGetRestaurants = () => {
  return useQuery({
    queryKey: ['restaurants'],
    queryFn: getRestaurants,
  })
}

interface UpdateRestaurantRaitingArgs {
  id: Restaurant['id']
  raiting: Restaurant['raiting']
}

const updateRestaurantRating = ({
  id,
  raiting,
}: UpdateRestaurantRaitingArgs): Promise<Restaurant> =>
  fetch(`${API_URL}/restaurants/${id}`, {
    method: 'PATCH',
    body: JSON.stringify({ raiting }),
  }).then((res) => res.json())

export const useChangeRestaurantRaiting = () => {
  return useMutation({
    mutationFn: updateRestaurantRating,
  })
}
