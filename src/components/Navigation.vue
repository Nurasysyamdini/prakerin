<template>
  <div class="w-56 text-right" style="z-index: 9999;">
    <Menu as="div" class="relative inline-block text-left">
      <div>
        <MenuButton
          class="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-black rounded-md bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
        >
          Menu
          <MenuIcon
            class="w-5 h-5 ml-2 -mr-1 text-violet-200 hover:text-violet-100"
            aria-hidden="true"
          />
        </MenuButton>
      </div>

      <transition
        enter-active-class="transition duration-100 ease-out"
        enter-from-class="transform scale-95 opacity-0"
        enter-to-class="transform scale-100 opacity-100"
        leave-active-class="transition duration-75 ease-in"
        leave-from-class="transform scale-100 opacity-100"
        leave-to-class="transform scale-95 opacity-0"
      >
        <MenuItems
          class="absolute right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
        >
          <div class="px-1 py-1">
            <MenuItem 
              v-slot="{ active }"
              v-if="store.userData !== null"
              >
              <button
                :class="[
                  active ? 'bg-primary-dark text-white' : 'text-gray-900',
                  'group flex rounded-md items-center w-full px-2 py-2 text-sm',
                ]"
                @click="getUserInfo"
              >
                <PeopleIcon
                  :active="active"
                  class="w-5 h-5 mr-2 text-primary-lightest-2"
                  aria-hidden="true"
                />
                {{ store.userData.firstName }} {{ store.userData.lastName }}
              </button>
            </MenuItem>
            <MenuItem v-slot="{ active }">
              <button
                @click="logout"
                :class="[
                  active ? 'bg-primary-dark text-white' : 'text-gray-900',
                  'group flex rounded-md items-center w-full px-2 py-2 text-sm',
                ]"
              >
                <LogoutIcon
                  :active="active"
                  class="w-5 h-5 mr-2 text-primary-lightest-2"
                  aria-hidden="true"
                />
                Logout
              </button>
            </MenuItem>
          </div>
        </MenuItems>
      </transition>
    </Menu>
  </div>
</template>

<script setup>
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'
import { useRouter } from 'vue-router';
import { useAuth } from '@/store/auth';
import { getUser } from '@/api/user.api';



import MenuIcon from '@/components/Icons/MenuIcon.vue'
import LogoutIcon from '@/components/Icons/LogoutIcon.vue'
import PeopleIcon from '@/components/Icons/PeopleIcon.vue'
const router = useRouter()
const store = useAuth()

const logout = () => {
  localStorage.removeItem('isAuthenticated')
  localStorage.removeItem('truckingToken')
  store.$reset()
  router.push('/login')
}

const getUserInfo = async () => {
  await getUser()
  .then(res => {
    console.log(res.data)
  })
}
</script>
