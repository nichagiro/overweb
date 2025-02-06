"use client"

import { FloatingWhatsApp } from 'react-floating-whatsapp'

const WhatsappFloating = () => {
  return (
    <FloatingWhatsApp
      accountName="Angela Rojas"
      statusMessage='Asistente de ventas'
      phoneNumber={process.env.NEXT_PUBLIC_WHATSAPP ?? ""}
      chatMessage='¿En que podemos ayudarte?'
      messageDelay={1}
      placeholder='Escriba su mensaje.'
      allowEsc
    />
  )
}

export default WhatsappFloating