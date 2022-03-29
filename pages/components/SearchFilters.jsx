import { useEffect, useState } from 'react';
import { Flex, Select, Box, Text, Input, Spinner, Icon, Button } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { MdCancel } from 'react-icons/md';
import Image from 'next/image';

import React from 'react'

const SearchFilters = () => {
  const [filter, setFilters] = useState({});
  return (
    <Flex bg="gray.100" p="4" justifyContent="center" flex-wrap="wrap">

    </Flex>
  )
}

export default SearchFilters;