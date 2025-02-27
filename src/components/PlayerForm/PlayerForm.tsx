import React, { useState, useEffect } from 'react';
import { Button } from '../ui/button';
import ShadMultiSelect from '../ShadMultiSelect/ShadMultiSelect';

interface Hero {
  id: string;
  name: string;
  shortname: string;
  icon: string;
  role: string;
  tier: string;
  type: string[];
}

const PlayerForm: React.FC = () => {
  const [nickname, setNickname] = useState('');
  const [role, setRole] = useState('');
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [options, setOptions] = useState<{ value: string, label: string }[]>([]);

  useEffect(() => {
    fetch('../heroes.json')
      .then(response => response.json())
      .then(data => {
        if (data && Array.isArray(data.heroes)) {
            const transformedOptions: { value: string, label: string }[] = data.heroes.map((hero: Hero) => ({
            value: hero.id,
            label: hero.shortname
            }))
            .filter((option: { value: number, label: string }) => option.label && option.value)
            .sort((a: {label: string}, b: {label: string}) => a.label.localeCompare(b.label));
          setOptions(transformedOptions);
        } else {
          console.error('Erro: dados não são um array', data);
        }
      })
      .catch(error => console.error('Erro ao carregar opções:', error));
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log({ nickname, role, selectedOptions });
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-visible w-full">
      <div className="p-8">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2">Nickname</label>
            <input
              type="text"
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
              placeholder="Digite o nick"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-300 leading-tight focus:outline-none focus:shadow-outline dark:bg-gray-800 dark:border-gray-600"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2">Função</label>
            <input
              type="text"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              placeholder="Digite a função"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-300 leading-tight focus:outline-none focus:shadow-outline dark:bg-gray-800 dark:border-gray-600"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2">Opções</label>
            <ShadMultiSelect
              options={options}
              onValueChange={setSelectedOptions}
              defaultValue={selectedOptions}
              placeholder="Selecione as opções"
              animation={0.5}
              maxCount={5}
              modalPopover={false}
              className="custom-multi-select"
            />
          </div>
          <div className="flex items-center justify-between">
            <Button type="submit" variant="default" size="default"> Enviar </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PlayerForm;