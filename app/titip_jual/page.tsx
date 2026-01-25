import { ComboboxItem, Combobox, ComboboxInput, ComboboxEmpty, ComboboxContent, ComboboxList } from '@/components/ui/combobox'
import { Field, FieldDescription, FieldGroup, FieldLabel, FieldLegend, FieldSet } from '@/components/ui/field'
import { Input } from '@/components/ui/input'

import React from 'react'

const TitipJual = () => {

    const merek = ["Toyota", "Daihatsu", "Honda", "Mitsubishi", "Suzuki"]
    
  return (
    <div className='pb-24 mt-4 px-[5%]'>
        <div>
            <h1 className='text-4xl mb-4 font-semibold'>Jual mobil kamu anti ribet, <br/>kami yang urus!</h1>
        </div>
        <form>
            <FieldGroup>
                <FieldSet>
                    <FieldLegend>Masukkan detail mobil kamu</FieldLegend>
                    <FieldDescription>Cukup isikan detail mobil kamu, kami akan membantu menjualnya dengan <br/>harga terbaik</FieldDescription>
                </FieldSet>
                <FieldGroup>
                    <Field>
                        <FieldLabel>Nama mobil</FieldLabel>
                        <Input placeholder='Contoh: Avanza G 2016'></Input>
                    </Field>
                    <Field>
                        <FieldLabel>Merek mobil</FieldLabel>
                        <Combobox>
                            <ComboboxInput placeholder="Pilih merek" />

                            <ComboboxContent>
                            <ComboboxList>
                                {merek.map((item) => (
                                <ComboboxItem key={item} value={item}>
                                    {item}
                                </ComboboxItem>
                                ))}
                            </ComboboxList>
                            </ComboboxContent>
                        </Combobox>
                    </Field>
                    <Field>
                        <FieldLabel>Nomor plat & kabupaten</FieldLabel>
                        <Input placeholder='Contoh: KH - Kalimantan'></Input>
                    </Field>
                    <Field>
                        <FieldLabel>Kilometer</FieldLabel>
                        <Input placeholder='Contoh: 100000'></Input>
                    </Field>
                    <Field>
                        <FieldLabel>Tahun pembuatan</FieldLabel>
                        <Input placeholder='Contoh: 2016'></Input>
                    </Field>
                    <Field>
                        <FieldLabel>Pajak berlaku sampai</FieldLabel>
                        <Input placeholder='Contoh: 20 Januari 2026'></Input>
                    </Field>
                    <Field>
                        <FieldLabel>Harga jual</FieldLabel>
                        <Input placeholder='Contoh: 150000000'></Input>
                    </Field>
                    <Field>
                        <FieldLabel>Nomor telp</FieldLabel>
                        <Input placeholder='Contoh: 08XXXXXXXXXX'></Input>
                    </Field>
                </FieldGroup>
            </FieldGroup>
        </form>

    </div>
  )
}

export default TitipJual