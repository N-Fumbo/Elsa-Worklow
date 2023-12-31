lexer grammar ElsaLexer;

EQ                  :   '=';
GREATER             :   '>';
INCREMENT           :   '++';
DECREMENT           :   '--';
NEW                 :   'new';
VARIABLE            :   'variable';
LET                 :   'let';
IF                  :   'if';
THEN                :   'then';
ELSE                :   'else';
FOR                 :   'for';
RETURN              :   'return';
VOID                :   'void';
FLOAT               :   'float';
INT                 :   'int';
STRING              :   'string';
OBJECT              :   'object';
EXPRESSION_MARKER   :   'expression';
SYMBOL              :   [=>$+`];
COLON               :   ':';
SEMICOLON           :   ';';
COMMA               :   ',';
PLUS                :   '+';
MINUS               :   '-';
STAR                :   '*';
EQUALS              :   '==';
NOT_EQUALS          :   '!=';
GREATER_EQUALS      :   '>=';
LESS                :   '<';
LESS_EQUALS         :   '<=';
LAMBDA              :   '=>';
PARENTHESES_OPEN    :   '(';
PARENTHESES_CLOSE   :   ')';
BRACKET_OPEN        :   '[';
BRACKET_CLOSE       :   ']';
CURLYBRACE_OPEN     :   '{';
CURLYBRACE_CLOSE    :   '}';
EXCLAMATION         :   '!';
PIPE                :   '|';
PIPE_DBL            :   '||';
PERIOD              :   '.';
STRING_VAL          :   '"' ('\\"' | .)*? '"';
BACKTICKSTRING_VAL  :   '`' ('\\"' | .)*? '`';
LINE_COMMENT        :   '//' .*? '\r'? '\n' -> skip;
INTEGER_VAL         :   DIGIT+;
ID                  :   LETTER (LETTER | DIGIT)*;
WS                  :   [ \t\r\n] -> skip;

fragment LETTER     :   [a-zA-Z_];
fragment DIGIT      :   [0-9];

ESC                 :   '\\|';