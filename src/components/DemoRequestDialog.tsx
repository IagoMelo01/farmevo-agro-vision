import { FormEvent, ReactNode, useMemo, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

interface DemoRequestDialogProps {
  children: ReactNode;
}

const initialFormState = {
  nome: "",
  email: "",
  telefone: "",
  tipoOperacao: "",
  tamanhoPropriedade: "",
  atividadePrincipal: "",
  objetivo: "",
  canalContato: "",
  observacoes: "",
};

const DemoRequestDialog = ({ children }: DemoRequestDialogProps) => {
  const { toast } = useToast();
  const [open, setOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState(initialFormState);

  const isSubmitDisabled = useMemo(() => {
    return (
      !formData.nome.trim() ||
      !formData.email.trim() ||
      !formData.telefone.trim() ||
      !formData.tipoOperacao ||
      !formData.tamanhoPropriedade ||
      !formData.atividadePrincipal ||
      !formData.objetivo ||
      !formData.canalContato
    );
  }, [formData]);

  const buildObservacoes = () => {
    const lines = [
      `Tipo de operação: ${formData.tipoOperacao}`,
      `Tamanho da propriedade: ${formData.tamanhoPropriedade}`,
      `Atividade principal: ${formData.atividadePrincipal}`,
      `Objetivo com o FarmEvo: ${formData.objetivo}`,
      `Canal de contato preferencial: ${formData.canalContato}`,
    ];

    if (formData.observacoes.trim()) {
      lines.push(`Observações adicionais: ${formData.observacoes.trim()}`);
    }

    return lines.join(" | ");
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (isSubmitDisabled || isSubmitting) {
      return;
    }

    setIsSubmitting(true);

    const payload = new FormData();
    payload.append("nome", formData.nome.trim());
    payload.append("email", formData.email.trim());
    payload.append("telefone", formData.telefone.trim());
    payload.append("tipo_operacao", formData.tipoOperacao);
    payload.append("tamanho_propriedade", formData.tamanhoPropriedade);
    payload.append("atividade_principal", formData.atividadePrincipal);
    payload.append("objetivo", formData.objetivo);
    payload.append("canal_contato", formData.canalContato);
    payload.append("observacoes_adicionais", formData.observacoes.trim());
    payload.append("observacoes", buildObservacoes());

    try {
      const response = await fetch("/submit_form.php", {
        method: "POST",
        body: payload,
      });

      const data = (await response.json().catch(() => null)) as
        | { success: boolean; message?: string }
        | null;

      if (!response.ok || !data?.success) {
        throw new Error(data?.message ?? "Erro ao enviar a solicitação. Tente novamente.");
      }

      toast({
        title: "Solicitação enviada com sucesso!",
        description: "Nossa equipe entrará em contato em breve.",
      });

      setFormData(initialFormState);
      setOpen(false);
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "Não foi possível enviar a solicitação.";

      toast({
        variant: "destructive",
        title: "Erro ao enviar",
        description: message,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-2xl">
        <DialogHeader>
          <DialogTitle>Solicite uma demonstração personalizada</DialogTitle>
          <DialogDescription>
            Preencha os dados abaixo para que nossa equipe entre em contato com a melhor proposta para sua operação.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="nome">Nome completo</Label>
              <Input
                id="nome"
                name="nome"
                placeholder="Digite seu nome"
                value={formData.nome}
                onChange={(event) => setFormData((prev) => ({ ...prev, nome: event.target.value }))}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">E-mail profissional</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="voce@empresa.com"
                value={formData.email}
                onChange={(event) => setFormData((prev) => ({ ...prev, email: event.target.value }))}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="telefone">Telefone / WhatsApp</Label>
              <Input
                id="telefone"
                name="telefone"
                placeholder="(00) 00000-0000"
                value={formData.telefone}
                onChange={(event) => setFormData((prev) => ({ ...prev, telefone: event.target.value }))}
                required
              />
            </div>

            <div className="space-y-2">
              <Label>Tipo de operação</Label>
              <Select
                value={formData.tipoOperacao}
                onValueChange={(value) => setFormData((prev) => ({ ...prev, tipoOperacao: value }))}
                required
              >
                <SelectTrigger>
                  <SelectValue placeholder="Selecione uma opção" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Agricultura">Agricultura</SelectItem>
                  <SelectItem value="Pecuária">Pecuária</SelectItem>
                  <SelectItem value="Agroindústria">Agroindústria</SelectItem>
                  <SelectItem value="Cooperativa">Cooperativa</SelectItem>
                  <SelectItem value="Consultoria Agrícola">Consultoria Agrícola</SelectItem>
                  <SelectItem value="Outro">Outro</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Tamanho da propriedade</Label>
              <Select
                value={formData.tamanhoPropriedade}
                onValueChange={(value) => setFormData((prev) => ({ ...prev, tamanhoPropriedade: value }))}
                required
              >
                <SelectTrigger>
                  <SelectValue placeholder="Selecione uma faixa" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Menos de 100 ha">Menos de 100 ha</SelectItem>
                  <SelectItem value="100 a 500 ha">100 a 500 ha</SelectItem>
                  <SelectItem value="500 a 1000 ha">500 a 1.000 ha</SelectItem>
                  <SelectItem value="1000 a 2500 ha">1.000 a 2.500 ha</SelectItem>
                  <SelectItem value="Mais de 2500 ha">Mais de 2.500 ha</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Atividade principal</Label>
              <Select
                value={formData.atividadePrincipal}
                onValueChange={(value) => setFormData((prev) => ({ ...prev, atividadePrincipal: value }))}
                required
              >
                <SelectTrigger>
                  <SelectValue placeholder="Selecione a atividade" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Soja">Produção de soja</SelectItem>
                  <SelectItem value="Milho">Produção de milho</SelectItem>
                  <SelectItem value="Algodao">Produção de algodão</SelectItem>
                  <SelectItem value="Cana">Produção de cana-de-açúcar</SelectItem>
                  <SelectItem value="Hortifruti">Hortifruti</SelectItem>
                  <SelectItem value="Florestas">Florestas plantadas</SelectItem>
                  <SelectItem value="Pecuaria leite">Pecuária leiteira</SelectItem>
                  <SelectItem value="Pecuaria corte">Pecuária de corte</SelectItem>
                  <SelectItem value="Outros">Outros</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Objetivo com o Farmevo</Label>
              <Select
                value={formData.objetivo}
                onValueChange={(value) => setFormData((prev) => ({ ...prev, objetivo: value }))}
                required
              >
                <SelectTrigger>
                  <SelectValue placeholder="Selecione o objetivo" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Gestao operacional">Gestão operacional</SelectItem>
                  <SelectItem value="Planejamento safra">Planejamento de safra</SelectItem>
                  <SelectItem value="Analise financeira">Análise financeira</SelectItem>
                  <SelectItem value="Monitoramento satelite">Monitoramento via satélite</SelectItem>
                  {/* <SelectItem value="Compliance ESG">Compliance e ESG</SelectItem> */}
                  <SelectItem value="Outro">Outro</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Canal preferencial de contato</Label>
              <Select
                value={formData.canalContato}
                onValueChange={(value) => setFormData((prev) => ({ ...prev, canalContato: value }))}
                required
              >
                <SelectTrigger>
                  <SelectValue placeholder="Selecione o canal" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Telefone">Telefone</SelectItem>
                  <SelectItem value="WhatsApp">WhatsApp</SelectItem>
                  <SelectItem value="Email">E-mail</SelectItem>
                  <SelectItem value="Videochamada">Videochamada</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="observacoes">Informações adicionais</Label>
            <Textarea
              id="observacoes"
              name="observacoes"
              placeholder="Conte-nos mais sobre seus desafios ou tecnologias que já utiliza."
              value={formData.observacoes}
              onChange={(event) => setFormData((prev) => ({ ...prev, observacoes: event.target.value }))}
              rows={4}
            />
          </div>

          <Button type="submit" disabled={isSubmitDisabled || isSubmitting} className="w-full md:w-auto">
            {isSubmitting ? "Enviando..." : "Enviar solicitação"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default DemoRequestDialog;
