import React, { useState } from 'react';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import PetshopService from '../../service/PetshopService';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';
import Divider from '@mui/material/Divider';

export default function MelhorPetshopForm() {
  const [melhorPetshop, setMelhorPetshop] = useState(null);
  const [formData, setFormData] = useState({
    data: '',
    qtdCaesPequenos: '',
    qtdCaesGrandes: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const data = await PetshopService.bestPetshops(formData);
      if (!formData.data || !formData.qtdCaesPequenos || !formData.qtdCaesGrandes) {
        setShowAlert(true);
      } else {
        setShowAlert(false);
        setMelhorPetshop(data);
      }

      setMelhorPetshop(data);
    } catch (error) {
      console.error('Erro ao enviar a solicitação:', error.message);
    } finally {
      setIsLoading(false);
    }
  };


  return (
    <>
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 5 }}>
        <Box
          component="form"
          sx={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: 2,
            '@media (min-width: 600px)': {
              gridTemplateColumns: 'repeat(2, 1fr)',
            },
            '@media (min-width: 900px)': {
              gridTemplateColumns: 'repeat(3, 1fr)',
            },
          }}
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <TextField id="data" label="Data do Banho" variant="outlined" onChange={handleChange} color="warning" />
          <TextField id="qtdCaesPequenos" label="Quantidade de Cães Pequenos" variant="outlined" color="warning" onChange={handleChange} />
          <TextField id="qtdCaesGrandes" label="Quantidade Cães Grandes" variant="outlined" color="warning" onChange={handleChange} />
        </Box>
      </Box>


      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 5 }}>
        <Box
          component="form"
          sx={{ '& > :not(style)': { m: 1, width: '25ch', }, }}

          autoComplete="off"
          onSubmit={handleSubmit}
        >

          <Button type="submit" variant="contained" color="primary" sx={{
            backgroundColor: '#fc8b22', '&:hover': {
              backgroundColor: '#ffaa33',
            },
          }} >Encontre o Melhor Petshop</Button>

        </Box>
      </Box>

      {showAlert && (
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
          <Alert severity="warning">Por favor, preencha todos os campos.</Alert>
        </Box>
      )}


      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
        {melhorPetshop ? (
          <Card variant="outlined" sx={{ maxWidth: 360 }}>
            <Box sx={{ p: 2 }}>
              <Stack direction="row" justifyContent="space-between" alignItems="center">
                <Typography gutterBottom variant="h5" component="div" sx={{ color: '#FC8B22' }}>
                  {melhorPetshop.nome}
                </Typography>
                <Typography gutterBottom variant="h6" component="div" sx={{ ml: 1 }}>
                  R$: {melhorPetshop.precoTotal},00
                </Typography>
              </Stack>
              <Typography color="text.secondary" variant="body2">
                Preço do Banho em dia útil: R$:{melhorPetshop.precoPequenoDiaUtil}
              </Typography>
              <Typography color="text.secondary" variant="body2">
                Preço do Banho em dia útil: R$:{melhorPetshop.precoGrandeDiaUtil}
              </Typography>
              <Typography color="text.secondary" variant="body2">
                Preço do Banho em final de semana: R$:{melhorPetshop.precoPequenoFimSemana}
              </Typography>
              <Typography color="text.secondary" variant="body2">
                Preço do Banho em final de semana: R$:{melhorPetshop.precoGrandeFimSemana}
              </Typography>
              <Typography color="text.secondary" variant="body2">
                Está localizado à {melhorPetshop.distancia}km de distância.
              </Typography>
            </Box>
            <Divider />
            <Box sx={{ p: 2 }}>
              <Typography gutterBottom variant="body2">
                Essa é a melhor opção para você e seu pet!
              </Typography>
            </Box>
          </Card>)
          : (<Box style={{ display: 'none' }}></Box>)}
      </Box>
    </>
  );
}
