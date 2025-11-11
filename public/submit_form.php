<?php
declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Methods: POST');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode([
        'success' => false,
        'message' => 'Método não permitido. Use POST.',
    ], JSON_UNESCAPED_UNICODE);
    exit;
}

$nome = trim($_POST['nome'] ?? '');
$email = trim($_POST['email'] ?? '');
$telefone = trim($_POST['telefone'] ?? '');
$tipoOperacao = trim($_POST['tipo_operacao'] ?? '');
$tamanhoPropriedade = trim($_POST['tamanho_propriedade'] ?? '');
$atividadePrincipal = trim($_POST['atividade_principal'] ?? '');
$objetivo = trim($_POST['objetivo'] ?? '');
$canalContato = trim($_POST['canal_contato'] ?? '');
$observacoesAdicionais = trim($_POST['observacoes_adicionais'] ?? '');

if ($nome === '' || $email === '' || $telefone === '') {
    http_response_code(422);
    echo json_encode([
        'success' => false,
        'message' => 'Nome, e-mail e telefone são obrigatórios.',
    ], JSON_UNESCAPED_UNICODE);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(422);
    echo json_encode([
        'success' => false,
        'message' => 'Informe um e-mail válido.',
    ], JSON_UNESCAPED_UNICODE);
    exit;
}

$observacoesParts = [];

if ($tipoOperacao !== '') {
    $observacoesParts[] = 'Tipo de operação: ' . $tipoOperacao;
}

if ($tamanhoPropriedade !== '') {
    $observacoesParts[] = 'Tamanho da propriedade: ' . $tamanhoPropriedade;
}

if ($atividadePrincipal !== '') {
    $observacoesParts[] = 'Atividade principal: ' . $atividadePrincipal;
}

if ($objetivo !== '') {
    $observacoesParts[] = 'Objetivo com o FarmEvo: ' . $objetivo;
}

if ($canalContato !== '') {
    $observacoesParts[] = 'Canal de contato preferencial: ' . $canalContato;
}

if ($observacoesAdicionais !== '') {
    $observacoesParts[] = 'Observações adicionais: ' . $observacoesAdicionais;
}

$observacoes = implode(' | ', $observacoesParts);

if ($observacoes === '') {
    $observacoes = 'Dados complementares não informados.';
}

$dsn = 'mysql:host=srv1664.hstgr.io;dbname=u574049230_site_fevo;charset=utf8mb4';
$usuario = 'u574049230_site_fevo';
$senha = 'Farmevo_2025';

try {
    $pdo = new PDO($dsn, $usuario, $senha, [
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    ]);

    $stmt = $pdo->prepare('INSERT INTO respostas (nome, email, telefone, `observações`) VALUES (?, ?, ?, ?)');
    $stmt->execute([
        $nome,
        $email,
        $telefone,
        $observacoes,
    ]);

    echo json_encode([
        'success' => true,
    ], JSON_UNESCAPED_UNICODE);
} catch (PDOException $exception) {
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => 'Erro ao salvar os dados. Tente novamente mais tarde.',
    ], JSON_UNESCAPED_UNICODE);
}
