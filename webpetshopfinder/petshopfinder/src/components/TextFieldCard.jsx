import React, { useState } from 'react';
import PetshopService from '../../service/PetshopService';
import { Divider, Stack, Typography, TextField, Alert, Card, Box , Button  } from '@mui/material';

export default function MelhorPetshopForm() {
  const [melhorPetshop, setMelhorPetshop] = useState(null);
  const [formData, setFormData] = useState({
    data: '',
    qtdCaesPequenos: '',
    qtdCaesGrandes: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [showAlertData, setShowAlertData] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    let formattedValue = value;
    if (id === 'data') {
      formattedValue = formatData(value);
    }
    setFormData((prevData) => ({
      ...prevData,
      [id]: formattedValue
    }));
  };

  const formatData = (input) => {
    const numericValue = input.replace(/\D/g, '');
    return numericValue.replace(/(\d{2})(\d{2})(\d{4})/, '$1/$2/$3');
  };

  // Validações
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setShowAlert(false);
    setShowAlertData(false);
  
    try {
      const data = await PetshopService.bestPetshops(formData);
      const { data: formDataData, qtdCaesPequenos, qtdCaesGrandes } = formData;
  
      if (!formDataData || !qtdCaesPequenos || !qtdCaesGrandes) {
        setShowAlert(true);
      }
  
      const regexData = /^\d{2}\/\d{2}\/\d{4}$/;
      const [dia, mes, ano] = formDataData.split('/').map(Number);
  
      if (!regexData.test(formDataData) || dia < 1 || dia > 31 || mes < 1 || mes > 12) {
        setShowAlertData(true);
      } else {
        setMelhorPetshop(data);
      }
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
          <TextField id="data" label="Data do Banho" variant="outlined" onChange={handleChange} color="warning" value={formData.data} />
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
      {showAlertData && (
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
          <Alert severity="warning">Por favor, preencha a data corretamente dd/MM/aaaa.</Alert>
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
