import { Avatar, Text, Image, Flex, Link } from '@chakra-ui/react';

import useSWR from 'swr';
import fetcher from '../lib/fetcher';

export default function SpotifyPlayer() {
  const { data } = useSWR('/api/now-playing/', fetcher);
  console.log(data);

  const track = {
    spotifyIcon:
      'https://raw.githubusercontent.com/Boro23-wq/social-icons/master/spotify.png',
  };

  return (
    <Flex
      flexDirection='row'
      border='1px'
      borderColor='rgba(255,255,255,0.2)'
      borderStyle='solid'
      borderRadius='5px'
      width='230px'
      h='50%'
      p={6.5}
      color='white'
    >
      {data?.albumImageUrl ? (
        <Avatar
          mr={8}
          name='Spotify'
          objectFit='cover'
          borderRadius='50%'
          width='58px'
          maxH='58px'
          name='Track Icon'
          src={data.albumImageUrl}
        />
      ) : (
        <Avatar
          mr={8}
          name='Spotify'
          objectFit='cover'
          borderRadius='50%'
          width='58px'
          maxH='58px'
          name='Track Icon'
          src={track.spotifyIcon}
        />
      )}

      <Flex width='150px' direction='row' justifyContent='space-between'>
        <Flex direction='column'>
          {data?.songUrl ? (
            <Text margin='0' fontWeight='bold' fontSize='12px' noOfLines={1}>
              <Link
                _hover={{
                  textDecoration: 'underline',
                }}
                href={data.songUrl}
                isExternal
              >
                {data.title}
              </Link>
            </Text>
          ) : (
            <Text margin='0' fontWeight='bold' fontSize='12px' noOfLines={1}>
              Not playing currently!
            </Text>
          )}

          {data?.artist ? (
            <Text
              margin='0px'
              fontSize='9px'
              color='rgba(255,255,255,0.5)'
              noOfLines={1}
            >
              {data.artist}
            </Text>
          ) : (
            <Text
              margin='0px'
              fontSize='9px'
              color='rgba(255,255,255,0.5)'
              noOfLines={1}
            >
              No Artist Found
            </Text>
          )}

          {data?.isPlaying ? (
            <Text color='rgba(110, 125, 154)' fontSize='7.5px'>
              <span
                style={{
                  height: '4.5px',
                  width: '4.5px',
                  backgroundColor: 'rgb(98,213,110)',
                  borderRadius: '50%',
                  display: 'inline-block',
                  justifyContent: 'center',
                  marginRight: '1.5px',
                }}
              ></span>{' '}
              Online - Playing on Spotify
            </Text>
          ) : (
            <Text color='rgba(110, 125, 154)' fontSize='7.5px'>
              <span
                style={{
                  height: '4.5px',
                  width: '4.5px',
                  backgroundColor: '#cf000f',
                  borderRadius: '50%',
                  display: 'inline-block',
                  justifyContent: 'center',
                  marginRight: '1.5px',
                }}
              ></span>{' '}
              Offline
            </Text>
          )}
        </Flex>
        {data?.isPlaying ? (
          <Image
            borderRadius='50%'
            maxW='12px'
            maxH='12px'
            name='Spotify Icon'
            src={track.spotifyIcon}
          />
        ) : (
          <Image
            borderRadius='50%'
            maxW='12px'
            maxH='12px'
            name='Spotify Icon'
            src={track.spotifyIcon}
          />
        )}
      </Flex>
    </Flex>
  );
}
